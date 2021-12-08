import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";

function PopupCard({offerActive, setOfferActive, currentOffer}) {
  const dispatch = useDispatch();
  
  return(
    <div className={(offerActive) ? "popup-card__active" : "popup-card"} 
      onClick={evt => setOfferActive(false)}
    >
      <div className="popup-card__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="popup-card__header">Добавить товар в корзину</h2>
        <div className="popup-card__case">
          <img src="./image/electro-1-mini.png" />
          <div className="popup-card__description-wrapper">
            <h2 className="popup-card__description-header">{currentOffer.name}</h2>
            <p className="popup-card__text">Артикул: {currentOffer.article}</p>
            <p className="popup-card__text">{currentOffer.type}, {currentOffer.strings} струнная </p>
            <p className="popup-card__price">Цена: {currentOffer.price} ₽</p>
          </div>
          <button className="popup-card__button" onClick={() => {
            dispatch(ActionCreator.addToCard(currentOffer));
            }}>Добавить в корзину</button>
        </div>
        <button className="popup-card__close" onClick={() => setOfferActive(false)}></button>
      </div>
    </div>
  );
}

export default PopupCard;