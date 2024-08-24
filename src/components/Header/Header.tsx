import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.module.scss';
import { Cart } from '../Cart';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('women');
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

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
                onMouseEnter={() => setIsCartVisible(true)}
                onMouseLeave={() => setIsCartVisible(false)}
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
              {isCartVisible && <Cart />}
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};
