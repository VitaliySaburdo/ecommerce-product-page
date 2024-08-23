import minus from '../../assets/images/icon-minus.svg';
import plus from '../../assets/images/icon-plus.svg';
import cart_black from '../../assets/images/icon-cart-black.svg';
import style from './Description.module.scss';
import { useState } from 'react';

export const Description = () => {
  const [count, setCount] = useState(0);

  const price = 125;

  const decrementCount = () => {
    setCount((prevState) => {
      if (prevState <= 0) return prevState;
      return prevState - 1;
    });
  };

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <p className={style.name}>SNEAKER COMPANY</p>
      <h1 className={style.title}>Fall Limited Edition Sneakers</h1>
      <p className={style.description}>
        This low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they`ll withstand everything the
        weather can offer.
      </p>
      <div className={style.info}>
        <p className={style.price}>${price.toFixed(2)}</p>
        <p className={style.discount}>50%</p>
      </div>
      <p className={style.old__price}>$250.00</p>
      <div className={style.box}>
        <div className={style.wrapper}>
          <button onClick={decrementCount} className={style.btn}>
            <img src={minus} alt="minus" />
          </button>
          <span className={style.counter}>{count}</span>
          <button onClick={incrementCount} className={style.btn}>
            <img src={plus} alt="plus" />
          </button>
        </div>
        <button className={style.cat__btn}>
          <img className={style.cart__img} src={cart_black} alt="cart" /> Add to
          cart
        </button>
      </div>
    </div>
  );
};
