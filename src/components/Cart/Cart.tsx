import deleteIcon from '../../assets/images/icon-delete.svg';
import style from './Cart.module.scss';

interface Order {
  img: string;
  name: string;
  price: number;
  count: number;
  total: number;
}

interface CartProps {
  setIsHovered: (value: boolean) => void;
  orders?: Order[];
}

export const Cart: React.FC<CartProps> = ({ setIsHovered, orders }) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.wrapper}
    >
      <h2 className={style.title}>Cart</h2>
      <div className={style.decor}></div>
      <div className={style.shell}>
        <div className={style.box}>
          {/* {order ? <p>name</p> : <p className={style.txt}>Your cart is empty.</p>} */}
          <ul>
            {orders?.map((order, idx) => {
              return (
                <li key={idx} className={style.item}>
                  <img
                    className={style.img}
                    src={order.img}
                    alt={order.name}
                    width={50}
                    height={50}
                  />
                  <div>
                    <p>{order.name}</p>
                    <p>
                      {order.price}X{order.count}
                    </p>
                  </div>
                  <button className={style.btn}>
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <button className={style.confirm__btn}>Checkout</button>
      </div>
    </div>
  );
};
