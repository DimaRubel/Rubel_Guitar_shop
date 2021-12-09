import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Header() {
  const cardOffers = useSelector((state) => state.card);
  return(
    <header className="header">
      <div className="layout">
        <div className="header__menu">
          <div className="logo-wrapper">
            <img src="./image/logo.svg" alt="logo" width="67" height="70" />
          </div>
          <nav className="navigation">
            <ul className="navigation__list">
              <li className="navigation__item"><Link className="navigation__item-link" to={AppRoute.CONVERTER}>Каталог</Link></li>
              <li className="navigation__item"><a className="navigation__item-link" href="#">Где купить?</a></li>
              <li className="navigation__item"><a className="navigation__item-link" href="#">О компании</a></li>
              <li className="navigation__item"><a className="navigation__item-link" href="#">Cервис-центры</a></li>
            </ul>
          </nav>
          <div className="menu">
            <div className="menu__item">
              <a href="#" className="menu__link menu__item-link">
                <span className="menu__icon menu__button-map"></span>
              </a>
            </div>
            <div className="menu__item">
              <a href="#" className="menu__link menu__item-link">
                <span className="menu__icon menu__button-search"></span>
              </a>
            </div>
            <div className="menu__item">
              <Link to={AppRoute.BASKET} className="menu__link menu__item-link">
                <span className="menu__icon menu__button-basket">
                  <span className="menu__notify">{cardOffers.length}</span>
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