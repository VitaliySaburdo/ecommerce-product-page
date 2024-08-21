import { Container } from '../Container';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.module.scss';

export const Header = () => {
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
              <li className="item">
                <a href="#" className={style.link}>
                  Collections
                </a>
              </li>
              <li className="item">
                <a href="#" className={style.link}>
                  Men
                </a>
              </li>
              <li className="item">
                <a href="#" className={style.link}>
                  Women
                </a>
              </li>
              <li className="item">
                <a href="#" className={style.link}>
                  About
                </a>
              </li>
              <li className="item">
                <a href="#" className={style.link}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button>
            <img src={cart} alt="cart" />
          </button>
          <button>
            <img src={avatar} alt="avatar" />
          </button>
        </header>
      </Container>
    </>
  );
};
