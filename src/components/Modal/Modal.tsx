import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

interface ModalProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = (e) => {
      if (e.code === 'Escape' && onClick) {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClick) {
      onClick();
    }
  };

  if (!modalRoot) {
    console.error('Modal root element not found');
    return null;
  }

  return createPortal(
    <div className={style.overlay} onClick={handleBackdropClick}>
      <div className={style.modal__body}>{children}</div>
    </div>,
    modalRoot
  );
};
