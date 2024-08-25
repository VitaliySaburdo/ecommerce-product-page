import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.module.scss';
import { Cart } from '../Cart';

interface Order {
  img: string;
  name: string;
  price: number;
  count: number;
  total: number;
}
interface HeaderProps {
  orders?: Order[];
}

export const Header = ({ orders }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState<string>('women');
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => setIsCartVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const linkArr = ['collections', 'men', 'women', 'about', 'contact'];

  const handleOnActiveLink = (nameLink: string) => {
    setActiveLink(nameLink);
  };

  return (
    <>
      <div className={style.heder__container}>
        <header className={style.header}>
          <img
            className={style.logo}
            src={logo}
            alt="logo"
            width={140}
            height={20}
          />
          <nav>
            <ul className={style.list}>
              {linkArr.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a
                      href="#"
                      onClick={() => handleOnActiveLink(item)}
                      className={
                        activeLink === item
                          ? `${style.link} ${style.active}`
                          : `${style.link}`
                      }
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
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
              </button>
            </li>
            <li>
              <button className={style.btn}>
                <img src={avatar} alt="avatar" width={52} height={52} />
              </button>
              {isCartVisible && (
                <Cart orders={orders} setIsHovered={setIsHovered} />
              )}
            </li>
          </ul>
          <Cart orders={orders} setIsHovered={setIsHovered} />
        </header>
      </div>
    </>
  );
};
