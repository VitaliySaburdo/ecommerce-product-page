import { useState } from 'react';
import style from './NavBar.module.scss';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('women');

  const handleOnActiveLink = (nameLink: string) => {
    setActiveLink(nameLink);
  };

  const linkArr = ['collections', 'men', 'women', 'about', 'contact'];
  return (
    <>
      <nav className={style.nav}>
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
    </>
  );
};
