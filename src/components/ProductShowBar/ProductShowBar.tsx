import product_1 from '../../assets/images/image-product-1.jpg';
import product_2 from '../../assets/images/image-product-2.jpg';
import product_3 from '../../assets/images/image-product-3.jpg';
import product_4 from '../../assets/images/image-product-4.jpg';
import product_1_thumbnail from '../../assets/images/image-product-1-thumbnail.jpg';
import product_2_thumbnail from '../../assets/images/image-product-2-thumbnail.jpg';
import product_3_thumbnail from '../../assets/images/image-product-3-thumbnail.jpg';
import product_4_thumbnail from '../../assets/images/image-product-4-thumbnail.jpg';
import style from './ProductShowBar.module.scss';
import { useState } from 'react';

export const ProductShowBar = () => {
  const [activeImg, setActiveImg] = useState(product_1_thumbnail);

  const HandleOnClick = (img: string) => {
    setActiveImg(img);
  };

  const images = [
    { thumbnail: product_1_thumbnail, full: product_1 },
    { thumbnail: product_2_thumbnail, full: product_2 },
    { thumbnail: product_3_thumbnail, full: product_3 },
    { thumbnail: product_4_thumbnail, full: product_4 },
  ];

  return (
    <>
      <div className={style.wrapper}>
        <img
          className={style.main__img}
          src={images.find((img) => img.thumbnail === activeImg)?.full}
          alt="product"
          width={450}
          height={450}
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
                    className={style.img__thumbnail}
                    style={
                      activeImg === item.thumbnail
                        ? { opacity: '0.5' }
                        : { opacity: '1' }
                    }
                    src={item.thumbnail}
                    alt="shoes"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
