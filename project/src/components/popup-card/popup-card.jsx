import React from "react";

function PopupCard({offerActive, setOfferActive, currentOffer}) {
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
          <button className="popup-card__button">Добавить в корзину</button>
          <button className="popup-card__close"></button>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;