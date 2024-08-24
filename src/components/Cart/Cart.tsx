import style from './Cart.module.scss';

export const Cart = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Cart</h2>
      <div className={style.decor}></div>
      <div className={style.box}>
        <p className={style.txt}>Your cart is empty.</p>
      </div>
    </div>
  );
};
