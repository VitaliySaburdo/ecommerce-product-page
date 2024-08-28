import { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import product_1 from '../../assets/images/image-product-1.jpg';
import product_2 from '../../assets/images/image-product-2.jpg';
import product_3 from '../../assets/images/image-product-3.jpg';
import product_4 from '../../assets/images/image-product-4.jpg';
import product_1_thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import product_2_thumbnail from '../../assets/images/image-product-2-thumbnail.jpg';
import product_3_thumbnail from '../../assets/images/image-product-3-thumbnail.jpg';
import product_4_thumbnail from '../../assets/images/image-product-4-thumbnail.jpg';
import IconNext from '../../assets/images/icon-next.svg?react';
import IconPrev from '../../assets/images/icon-previous.svg?react';
import IconClose from '../../assets/images/icon-close.svg?react';
import style from './ProductShowBar.module.scss';

export const ProductShowBar = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(activeImg);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { thumbnail: product_1_thumbnail, full: product_1 },
    { thumbnail: product_2_thumbnail, full: product_2 },
    { thumbnail: product_3_thumbnail, full: product_3 },
    { thumbnail: product_4_thumbnail, full: product_4 },
  ];

  const HandleOnClick = (idx: number) => {
    setActiveImg(idx);
    setCurrentIdx(idx);
  };

  const HandleOnModalClick = (idx: number) => {
    setCurrentIdx(idx);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setActiveImg(currentIdx);
  };

  const onNextBtn = () => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const onPrevBtn = () => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  };

  const handleImageClick = () => {
    if (window.innerWidth >= 1440) {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const screen = window.matchMedia('(max-width: 1439px)');
    if (!screen.matches) {
      window.addEventListener('resize', handleImageClick);
    }
    return () => {
      window.removeEventListener('resize', handleImageClick);
    };
  }, []);

  return (
    <>
      <div className={style.wrapper}>
        <img
          onClick={handleImageClick}
          className={style.main__img}
          src={images[activeImg].full}
          alt="product"
          width={500}
          height={500}
        />
        <div className={style.button__block}>
          <button
            onClick={() =>
              setActiveImg(
                (prevIdx) => (prevIdx - 1 + images.length) % images.length
              )
            }
            className={`${style.slide__btn} ${style.previous}`}
          >
            <IconPrev className={style.icon} />
          </button>
          <button
            onClick={() =>
              setActiveImg((prevIdx) => (prevIdx + 1) % images.length)
            }
            className={`${style.slide__btn} ${style.next}`}
          >
            <IconNext className={style.icon} />
          </button>
        </div>
        <ul className={style.list}>
          {images.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => HandleOnClick(idx)}
                  className={
                    activeImg === idx
                      ? `${style.btn} ${style.active}`
                      : style.btn
                  }
                >
                  <img
                    className={`${style.img__thumbnail} ${
                      activeImg === idx ? style.activeThumbnail : ''
                    }`}
                    src={item.thumbnail}
                    alt="shoes"
                    width={90}
                    height={90}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {isModalOpen && (
        <Modal onClick={handleModalClose}>
          <div className={style.wrapper}>
            <button onClick={handleModalClose} className={style.close__btn}>
              <IconClose />
            </button>
            <img
              className={style.main__img}
              src={images[currentIdx].full}
              alt="product"
              width={550}
              height={550}
            />
            <button
              onClick={onPrevBtn}
              className={`${style.slide__btn} ${style.previous}`}
            >
              <IconPrev className={style.icon} />
            </button>
            <button
              onClick={onNextBtn}
              className={`${style.slide__btn} ${style.next}`}
            >
              <IconNext className={style.icon} />
            </button>
            <ul className={style.modalList}>
              {images.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => HandleOnModalClick(idx)}
                    className={
                      currentIdx === idx
                        ? `${style.btn} ${style.active}`
                        : style.btn
                    }
                  >
                    <img
                      className={`${style.img__thumbnail} ${
                        currentIdx === idx ? style.activeThumbnail : ''
                      }`}
                      src={item.thumbnail}
                      alt="shoes"
                      width={90}
                      height={90}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};
