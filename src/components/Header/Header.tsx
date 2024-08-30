import { useState, useEffect } from 'react';
import { Order } from '../../types';
import { Cart } from '../Cart';
import { NavBar } from '../NavBar';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import Menu from '../../assets/images/icon-menu.svg?react';
import Close from '../../assets/images/icon-close.svg?react';
import style from './Header.module.scss';

interface HeaderProps {
  orders?: Order[];
  onDelete: (id: string) => void;
  onConfirm: (orders: Order[]) => void;
}

export const Header = ({ orders, onDelete, onConfirm }: HeaderProps) => {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => setIsCartVisible(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <>
      <div className={style.heder__container}>
        <header className={style.header}>
          <button onClick={openMobileMenu} className={style.mobile__btn}>
            <Menu />
            <span className={style.visually_hidden}>Menu</span>
          </button>
          <img
            className={style.logo}
            src={logo}
            alt="logo"
            width={140}
            height={20}
          />
          <div className={style.deskTabMenu}>
            <NavBar />
          </div>
          <div
            className={style.mobileMenu}
            style={{
              transform: isMenuOpen ? 'translateX(0)' : undefined,
            }}
          >
            <Close onClick={closeMobileMenu} />
            <NavBar />
          </div>
          <ul className={style.user__menu}>
            <li className={style.cart__container}>
              <button
                onMouseEnter={() => {
                  setIsCartVisible(true);
                  setIsHovered(true);
                }}
                onMouseLeave={() => setIsHovered(false)}
                className={style.btn}
              >
                <img
                  className={style.cart__img}
                  src={cart}
                  alt="cart"
                  width={22}
                  height={22}
                />
                {orders && orders.length > 0 && (
                  <span className={style.count}>{orders[0].quantity}</span>
                )}
              </button>
            </li>
            <li>
              <button className={style.btn__profile}>
                <img src={avatar} alt="avatar" width={52} height={52} />
              </button>
              {isCartVisible && (
                <Cart
                  orders={orders}
                  setIsHovered={setIsHovered}
                  onDelete={onDelete}
                  onConfirm={onConfirm}
                />
              )}
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};
