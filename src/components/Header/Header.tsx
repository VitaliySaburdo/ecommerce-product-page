import { useState } from 'react';
import { Container } from '../Container';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.module.scss';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('women');

  const handleOnActiveLink = (nameLink: string) => {
    setActiveLink(nameLink);
  };

  return (
    <>
      <Container>
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
              <li className={activeLink === 'collections' ? style.active : ''}>
                <a
                  href="#"
                  onClick={() => handleOnActiveLink('collections')}
                  className={style.link}
                >
                  Collections
                </a>
              </li>
              <li className={activeLink === 'men' ? style.active : ''}>
                <a
                  onClick={() => handleOnActiveLink('men')}
                  href="#"
                  className={style.link}
                >
                  Men
                </a>
              </li>
              <li className={activeLink === 'women' ? style.active : ''}>
                <a
                  onClick={() => handleOnActiveLink('women')}
                  href="#"
                  className={style.link}
                >
                  Women
                </a>
              </li>
              <li className={activeLink === 'about' ? style.active : ''}>
                <a
                  onClick={() => handleOnActiveLink('about')}
                  href="#"
                  className={style.link}
                >
                  About
                </a>
              </li>
              <li className={activeLink === 'contact' ? style.active : ''}>
                <a
                  onClick={() => handleOnActiveLink('contact')}
                  href="#"
                  className={style.link}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ul className={style.user__menu}>
            <li>
              <button className={style.btn}>
                <img src={cart} alt="cart" width={22} height={22} />
              </button>
            </li>
            <li>
              <button className={style.btn}>
                <img src={avatar} alt="avatar" width={52} height={52} />
              </button>
            </li>
          </ul>
        </header>
      </Container>
    </>
  );
};
