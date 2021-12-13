import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMask } from "../../sorting/sorting";
import { ActionCreator } from "../../store/action";
import propTypes from 'prop-types';

function PopupCard({offerActive, onOfferClose, currentOffer, onSuccessActive}) {
  const dispatch = useDispatch();

  function close() {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    onOfferClose(false);
  }
 
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = offerActive ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        close();
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [offerActive]);
  
  return(
    <>
    {(offerActive) ? <FocusTrap>
    <div className={(offerActive) ? "popup-card__active" : "popup-card"} 
      onClick={close}
    >
      <div className="popup-card__wrapper" onClick={(evt) => {evt.stopPropagation() }}>
        <h2 className="popup-card__header">Добавить товар в корзину</h2>
        <div className="popup-card__case">
          <img src={`./image/${currentOffer.image}`} width="56" height="128" />
          <div className="popup-card__description-wrapper">
            <h2 className="popup-card__description-header">{currentOffer.name}</h2>
            <p className="popup-card__text">Артикул: {currentOffer.article}</p>
            <p className="popup-card__text">{currentOffer.type}, {currentOffer.strings} струнная </p>
            <p className="popup-card__price">Цена: {addMask(currentOffer.price)} ₽</p>
          </div>
          <button className="popup-card__button" onClick={() => {
            dispatch(ActionCreator.addToCard(currentOffer));
            onSuccessActive(true);
            close();
            }}>Добавить в корзину</button>
        </div>
        <button className="popup-card__close" onClick={close}></button>
      </div>
    </div>
    </FocusTrap> : null}
    </>
  );
}

PopupCard.propTypes = {
  offerActive: propTypes.bool,
  onOfferClose: propTypes.func,
  currentOffer: propTypes.object,
  onSuccessActive: propTypes.func,
}

export default PopupCard;