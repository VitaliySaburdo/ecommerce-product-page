import style from './Buttons.module.scss';
import IconNext from '../../assets/images/icon-next.svg';
import IconPrev from '../../assets/images/icon-previous.svg';
import IconClose from '../../assets/images/icon-close.svg';

export const CloseButton = () => {
  return (
    <button className={style.close__btn}>
      <IconClose />
    </button>
  );
};
