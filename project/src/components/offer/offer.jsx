import React, { useState } from "react";
import { addMask } from "../../sorting/sorting";
import PopupCard from "../popup-card/popup-card";
import Success from "../success/success";
import propTypes from 'prop-types';

function Offer({currentOffer}) {
  const [offerActive, setOfferActive] = useState(false);
  const [successActive,setSuccessActive] = useState(false);
  return(
    <>
      <article className="guitar">
        <div className="guitar__centerman">
          <a className="guitar__link" href="#">
            <img className="guitar__image" src={`./image/${currentOffer.image}`} width="68" height="190" alt="guitar" />
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
          <h3 className="guitar__price">{addMask(currentOffer.price)} ₽</h3>
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
      {offerActive && <PopupCard offerActive={offerActive} onOfferClose={setOfferActive} onSuccessActive={setSuccessActive} currentOffer={currentOffer} />}
      {successActive && <Success success={successActive} onSuccessClose={setSuccessActive}/>}
    </>
  );
}

Success.propTypes = {
  currentOffer: propTypes.array,
}

export default Offer;