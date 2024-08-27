import { useState } from 'react';
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
  const [activeImg, setActiveImg] = useState(product_1_thumbnail);
  const [currentIdx, setCurrentIdx] = useState(0);

  const HandleOnClick = (img: string) => {
    setActiveImg(img);
  };

  const HandleOnModalClick = (idx: number) => {
    setCurrentIdx(idx);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { thumbnail: product_1_thumbnail, full: product_1 },
    { thumbnail: product_2_thumbnail, full: product_2 },
    { thumbnail: product_3_thumbnail, full: product_3 },
    { thumbnail: product_4_thumbnail, full: product_4 },
  ];

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onNextBtn = () => {
    setCurrentIdx(currentIdx + 1);
    if (currentIdx === 3) {
      setCurrentIdx(0);
    }
    return images[currentIdx].full;
  };

  const onPrevBtn = () => {
    setCurrentIdx(currentIdx - 1);
    if (currentIdx === 0) {
      setCurrentIdx(3);
    }
    return images[currentIdx].full;
  };

  return (
    <>
      <div>
        <img
          onClick={handleImageClick}
          className={style.main__img}
          src={images.find((img) => img.thumbnail === activeImg)?.full}
          alt="product"
          width={500}
          height={500}
        />
        <ul className={style.list}>
          {images.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => HandleOnClick(item.thumbnail)}
                  className={
                    activeImg === item.thumbnail
                      ? `${style.btn} ${style.active}`
                      : style.btn
                  }
                >
                  <img
                    className={`${style.img__thumbnail} ${
                      activeImg === item.thumbnail ? style.activeThumbnail : ''
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
            <button className={style.close__btn}>
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
