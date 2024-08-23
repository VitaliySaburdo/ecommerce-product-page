import style from './Description.module.scss';

export const Description = () => {
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
        <p className={style.price}>$125.00</p>
        <p className={style.discount}>50%</p>
      </div>
      <p className={style.old__price}>$250.00</p>
      <div className={style.wrapper}>
        <button className={style.decrement__btn}>-</button>
        <span className={style.counter}>0</span>
        <button className={style.increment__btn}>+</button>
      </div>
      <button className={style.cat__btn}>Add to cart</button>
    </div>
  );
};
