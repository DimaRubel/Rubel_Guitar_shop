import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Header() {
  return(
    <header className="header">
      <div className="layout">
        <div className="header__menu">
          <div className="logo-wrapper">
            <img src="./image/logo.svg" alt="logo" width="67" height="70" />
          </div>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item"><Link to={AppRoute.CONVERTER}>Каталог</Link></li>
              <li className="navigation__item"><a>Где купить?</a></li>
              <li className="navigation__item"><a>О компании</a></li>
              <li className="navigation__item"><a>Cервис-центры</a></li>
            </ul>
          </nav>
          <div className="menu">
            <div className="menu__item">
              <a href="#" className="menu__link">
                <span className="menu__icon menu__button-map"></span>
              </a>
            </div>
            <div className="menu__item">
              <a href="#" className="menu__link">
                <span className="menu__icon menu__button-search"></span>
              </a>
            </div>
            <div className="menu__item">
              <Link to={AppRoute.BASKET} className="menu__link">
                <span className="menu__icon menu__button-basket">
                  <span className="menu__notify">2</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;