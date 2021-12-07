import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupCard from "../popup-card/popup-card";

function Offer({currentOffer}) {
  const [offerActive, setOfferActive] = useState(false);
  return(
    <>
      <article className="guitar">
        <div className="guitar__centerman">
          <a className="guitar__link">
            <img className="guitar__image" src="./image/electro-1.png" width="68" height="190" />
          </a>
        </div>

        <div className="rating">
          <div className="guitar__stars rating__stars">
            <span className="guitar__rating-active" style={{width: `${ 5/5*100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="rating__length">{currentOffer.popular}</span>
        </div>

        <div className="guitar__name-wrapper">
          <h3 className="guitar__name">{currentOffer.name}</h3>
          <h3 className="guitar__price">{currentOffer.price}</h3>
        </div>

        <div className="guitar__buy-wrapper">
          <button className="guitar__details">Подробнее</button>
          <button className="guitar__buy"
          onClick={(evt) => {
            evt.preventDefault();
            setOfferActive(true)
          }}>Купить</button>
        </div>
      </article>
      <PopupCard offerActive={offerActive} setOfferActive={setOfferActive} currentOffer={currentOffer} />
    </>
  );
}

export default Offer;