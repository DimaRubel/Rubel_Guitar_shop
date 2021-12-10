import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NULL, Promocodes } from "../../const";
import { addMask } from "../../sorting/sorting";
import { ActionCreator } from "../../store/action";
import PopupDelete from "../delete/delete";

function BasketContent() {
  const offers = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [deleteActive, setDeleteActive] = useState(false);
  const [promo, setPromo] = useState();
  const [inputPromo, setInputPromo] = useState();
  const [error, setError] = useState('');

  function totalBasket() {
    const summ = offers
      .map((item) => item.offer.price * item.count)
      .reduce((a,b) => a + b);
    return Object.keys(Promocodes).includes(promo) 
    ? Promocodes[promo](summ) : summ;
  }

  function validatePromo() {
    return Object.keys(Promocodes).includes(inputPromo);
  }

  

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
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1459 4.64592C10.1924 4.59935 10.2475 4.56241 10.3083 4.5372C10.369 4.512 10.4341 4.49902 10.4999 4.49902C10.5657 4.49902 10.6308 4.512 10.6916 4.5372C10.7523 4.56241 10.8075 4.59935 10.8539 4.64592L13.8539 7.64592C13.9005 7.69236 13.9374 7.74754 13.9626 7.80828C13.9878 7.86903 14.0008 7.93415 14.0008 7.99992C14.0008 8.06568 13.9878 8.13081 13.9626 8.19155C13.9374 8.2523 13.9005 8.30747 13.8539 8.35392L10.8539 11.3539C10.76 11.4478 10.6327 11.5005 10.4999 11.5005C10.3671 11.5005 10.2398 11.4478 10.1459 11.3539C10.052 11.26 9.99929 11.1327 9.99929 10.9999C9.99929 10.8671 10.052 10.7398 10.1459 10.6459L12.7929 7.99992L10.1459 5.35392C10.0994 5.30747 10.0624 5.2523 10.0372 5.19155C10.012 5.13081 9.99902 5.06568 9.99902 4.99992C9.99902 4.93415 10.012 4.86903 10.0372 4.80828C10.0624 4.74754 10.0994 4.69236 10.1459 4.64592Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13C13.1326 7.5 13.2598 7.55268 13.3536 7.64645C13.4473 7.74021 13.5 7.86739 13.5 8C13.5 8.13261 13.4473 8.25979 13.3536 8.35355C13.2598 8.44732 13.1326 8.5 13 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8Z" fill="black"/>
                  </svg>
                </div>
                <h3 className="catalog__nav">Каталог</h3>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.1459 4.64592C10.1924 4.59935 10.2475 4.56241 10.3083 4.5372C10.369 4.512 10.4341 4.49902 10.4999 4.49902C10.5657 4.49902 10.6308 4.512 10.6916 4.5372C10.7523 4.56241 10.8075 4.59935 10.8539 4.64592L13.8539 7.64592C13.9005 7.69236 13.9374 7.74754 13.9626 7.80828C13.9878 7.86903 14.0008 7.93415 14.0008 7.99992C14.0008 8.06568 13.9878 8.13081 13.9626 8.19155C13.9374 8.2523 13.9005 8.30747 13.8539 8.35392L10.8539 11.3539C10.76 11.4478 10.6327 11.5005 10.4999 11.5005C10.3671 11.5005 10.2398 11.4478 10.1459 11.3539C10.052 11.26 9.99929 11.1327 9.99929 10.9999C9.99929 10.8671 10.052 10.7398 10.1459 10.6459L12.7929 7.99992L10.1459 5.35392C10.0994 5.30747 10.0624 5.2523 10.0372 5.19155C10.012 5.13081 9.99902 5.06568 9.99902 4.99992C9.99902 4.93415 10.012 4.86903 10.0372 4.80828C10.0624 4.74754 10.0994 4.69236 10.1459 4.64592Z" fill="black"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13C13.1326 7.5 13.2598 7.55268 13.3536 7.64645C13.4473 7.74021 13.5 7.86739 13.5 8C13.5 8.13261 13.4473 8.25979 13.3536 8.35355C13.2598 8.44732 13.1326 8.5 13 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8Z" fill="black"/>
                  </svg>
                </div>
                <h3 className="catalog__nav">Оформляем</h3>
              </div>
            </div>

            <ul className="product__list">
              {offers.map((item) => {
                const offer = item.offer;
                const count = item.count;
      
                return <li key={offer.id} className="product__item">
                <div className="product__img">
                  <img className="product__image" src={`./image/${item.offer.image}`} width="56" height="128" />
                </div>

                <div className="product__description-wrapper">
                  <h3 className="product__header">ЭлектроГитара {item.offer.name}</h3>
                  <p className="product__text">Артикул: {item.offer.article}</p>
                  <p className="product__text">{item.offer.type}, {item.offer.strings} струнная</p>
                </div>

                <div className="product__price-wrapper">
                  <p className="product__price">{addMask(item.offer.price)} ₽</p>
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
                  <p className="product__price product__price-modificate">{addMask(offer.price * count)} ₽</p>
                </div>
                <button className="product__delete" onClick={() => setDeleteActive(true)}></button>
                {deleteActive && <PopupDelete deleteActive={deleteActive} setDeleteActive={setDeleteActive} currentOffer={offer} />}
              </li>
              })}
            </ul>

            <div className="promo">
              <div className="promo__wrapper">
                <h3 className="promo__header">Промокод на скидку</h3>
                <p className="promo__text">Введите свой промокод, если он у вас есть.</p>
                <div className="promo__button-wrapper">
                  <input className="promo__button" onChange={(evt) => setInputPromo(evt.target.value)} placeholder="GITARAHIT"/>
                  <button className="promo__button-ticket" onClick={() => {
                    if(validatePromo()) {
                      setPromo(inputPromo);
                      setError('');
                    } else {
                      setError('Недействительный промокод');
                    }
                    }}>Применить купон</button>
                </div>
                {error}
              </div>
              <div className="promo__price">
                <h3 className="promo__price-header">Всего: {
                 addMask(offers.length > NULL ? totalBasket() : NULL)} ₽ </h3>
                <button className="promo__price-button" >Оформить заказ</button>
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