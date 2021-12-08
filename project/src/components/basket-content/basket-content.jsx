import { map } from "leaflet";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreator } from "../../store/action";

function BasketContent() {
  const offers = useSelector((state) => state.card);
  const dispatch = useDispatch();
  return(
    <>
      <main className="basket-page">
        <section className="basket catalog">
          <div className="image-back">
            <div className="image-back__layout"></div>
          </div>
          <div className="product__container">  
            <div className="product__wrapper ">
              <h2 className="catalog__header">Корзина</h2>
              <div className="catalog__nav-wrapper basket__nav">
                <h3 className="catalog__nav">Главная</h3>
                <h3 className="catalog__nav">Каталог</h3>
                <h3 className="catalog__nav">Оформляем</h3>
              </div>
            </div>

            <ul className="product__list">
              {offers.map((item) => {
                const offer = item.offer;
                const count = item.count;
      
                return <li key={offer.id} className="product__item">
                <div className="product__img">
                  <img className="product__image" src="./image/electro-1-mini.png" />
                </div>

                <div className="product__description-wrapper">
                  <h3 className="product__header">ЭлектроГитара Честер bass</h3>
                  <p className="product__text">Артикул: SO757575</p>
                  <p className="product__text">Электрогитара, 6 струнная</p>
                </div>

                <div className="product__price-wrapper">
                  <p className="product__price">17 500 ₽</p>
                </div>

                <div className="product__button-wrapper">
                  <div className="product__case">
                    <button className="product__button-decrement" onClick={() => dispatch(ActionCreator.changeDown(offer))}>-</button>
                    <p className="product__number">{count}</p>
                    <button className="product__button-increment" onClick={() => {
                      dispatch(ActionCreator.changeUp(offer))}}>+</button>
                  </div>
                </div>

                <div className="product__price-wrapper product__button-wrapper-moduficate ">
                  <p className="product__price product__price-modificate">{offer.price * count}</p>
                </div>
                <button className="product__delete"></button>
              </li>
              })}
            </ul>

            <div className="promo">
              <div className="promo__wrapper">
                <h3 className="promo__header">Промокод на скидку</h3>
                <p className="promo__text">Введите свой промокод, если он у вас есть.</p>
                <div className="promo__button-wrapper">
                  <button className="promo__button">GITARAHIT</button>
                  <button className="promo__button-ticket">Применить купон</button>
                </div>
              </div>
              <div className="promo__price">
                <h3 className="promo__price-header">Всего: 47 000 ₽ </h3>
                <button className="promo__price-button">Оформить заказ</button>
              </div>
            </div>

          </div>
          <div className="image-back-foother">
            <div className="image-back__layout-foother"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BasketContent;