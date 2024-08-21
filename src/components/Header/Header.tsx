import { Container } from '../Container';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import style from './Header.scss';

export const Header = () => {
  return (
    <>
      <Container>
        <header>
          <img src={logo} alt="logo" />
          <nav>
            <ul className="list">
              <li className="item">
                <a href="#" className="link">
                  Collections
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Men
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  Women
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
                  About
                </a>
              </li>
              <li className="item">
                <a href="#" className="link">
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
