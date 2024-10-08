import { useState, useEffect, useMemo, useCallback } from 'react';
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

  const images = useMemo(
    () => [
      { thumbnail: product_1_thumbnail, full: product_1 },
      { thumbnail: product_2_thumbnail, full: product_2 },
      { thumbnail: product_3_thumbnail, full: product_3 },
      { thumbnail: product_4_thumbnail, full: product_4 },
    ],
    []
  );

  const handleImageClick = useCallback(() => {
    if (window.innerWidth >= 1440) {
      setIsModalOpen(true);
    }
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setActiveImg(currentIdx);
  }, [currentIdx]);

  const onNextBtn = useCallback(() => {
    setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
  }, [images.length]);

  const onPrevBtn = useCallback(() => {
    setCurrentIdx((prevIdx) => (prevIdx - 1 + images.length) % images.length);
  }, [images.length]);

  const handleThumbnailClick = useCallback((idx: number) => {
    setActiveImg(idx);
    setCurrentIdx(idx);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
            <span className={style.visually_hidden}>previous button</span>
          </button>
          <button
            onClick={() =>
              setActiveImg((prevIdx) => (prevIdx + 1) % images.length)
            }
            className={`${style.slide__btn} ${style.next}`}
          >
            <IconNext className={style.icon} />
            <span className={style.visually_hidden}>next button</span>
          </button>
        </div>
        <ul className={style.list}>
          {images.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => handleThumbnailClick(idx)}
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
              <span className={style.visually_hidden}>previous button</span>
            </button>
            <button
              onClick={onNextBtn}
              className={`${style.slide__btn} ${style.next}`}
            >
              <IconNext className={style.icon} />
              <span className={style.visually_hidden}>next button</span>
            </button>
            <ul className={style.modalList}>
              {images.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleThumbnailClick(idx)}
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
