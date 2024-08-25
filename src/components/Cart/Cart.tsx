import style from './Cart.module.scss';

interface CartProps {
  setIsHovered: (value: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({ setIsHovered }) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.wrapper}
    >
      <h2 className={style.title}>Cart</h2>
      <div className={style.decor}></div>
      <div className={style.box}>
        <p className={style.txt}>Your cart is empty.</p>
      </div>
    </div>
  );
};
