import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Equipments from './Equipments';

const Navbar = () => {
  const [openEquips, setopenEquips] = useState(false);
  const [showNav, setShowNav] = useState('');
  const navRef = useRef();
  const menuRef = useRef();
  // const toogle = useRef();
  // const menu = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== navRef.current) {
      setopenEquips(false);
    }

    // if (e.target !== menu.current && e.target !== toogle.current) {
    //   setShowNav('');
    // }
  });
  const arrowDown = (
    <span class="material-symbols-outlined icon-small">expand_more</span>
  );

  return (
    <>
      <div className="header">
        <div className="nav max-width">
          <div className="left">
            <div
              ref={navRef}
              className="item"
              onClick={() => {
                setopenEquips((prev) => !prev);
              }}
            >
              Equipments
              {arrowDown}
            </div>
            {openEquips && <Equipments menuRef={menuRef} />}
          </div>
          <div className="center">
            <Link className="link" to="/">
              KALYAN
            </Link>
          </div>
          <div className="right">
            <div className="mr-1">
              <div className="item">
                <a className="link" href="#about">
                  About
                </a>
              </div>
              <div className="item">
                <a className="link" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="icons">
              <span class="material-symbols-outlined icon-small">search</span>
              <span class="material-symbols-outlined icon-small">person</span>
              <span class="material-symbols-outlined icon-small">favorite</span>
              <div className="cartIcon">
                <span class="material-symbols-outlined icon-small">
                  shopping_cart
                </span>
                <span className="cartSpan">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      <header className="header_2" id="header_2">
        <nav className="nav ">
          <div>
            <Link className="nav__link" to="/">
              KALYAN
            </Link>
          </div>

          <div className={`nav__menu ${showNav}`} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <div className="nav__drop">
                  Equipments
                  {arrowDown}
                </div>
              </li>
            </ul>
            <span class="material-symbols-outlined close" id="close">
              close
            </span>
          </div>

          <div className="nav__wrapper">
            <div className="icons">
              <span class="material-symbols-outlined icon-small">search</span>
              <span class="material-symbols-outlined icon-small">person</span>
              <span class="material-symbols-outlined icon-small">favorite</span>
              <div className="cartIcon">
                <span class="material-symbols-outlined icon-small">
                  shopping_cart
                </span>
                <span className="cartSpan">0</span>
              </div>
            </div>

            <div
              onClick={() => setShowNav(showNav === '' ? 'show-menu' : '')}
              className="nav__toogle"
              id="nav-toggle"
            >
              <span class="material-symbols-outlined">apps</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
