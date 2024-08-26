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
  onDelete: (index: number) => void;
}

export const Cart: React.FC<CartProps> = ({
  setIsHovered,
  orders,
  onDelete,
}) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={style.wrapper}
    >
      <h2 className={style.title}>Cart</h2>
      <div className={style.decor}></div>
      {orders && orders.length > 0 ? (
        <>
          <div className={style.shell}>
            <div className={style.box}>
              <ul>
                {orders.map((order, idx) => (
                  <li key={idx} className={style.item}>
                    <img
                      className={style.img}
                      src={order.img}
                      alt={order.name}
                      width={50}
                      height={50}
                    />
                    <div>
                      <p className={style.text}>{order.name}</p>
                      <p>
                        ${order.price.toFixed(2)} x {order.count}{' '}
                        <span className={style.total}>
                          ${order.total.toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <button onClick={() => onDelete(idx)} className={style.btn}>
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button className={style.confirm__btn}>Checkout</button>
          </div>
        </>
      ) : (
        <p className={style.txt}>Your cart is empty.</p>
      )}
    </div>
  );
};
