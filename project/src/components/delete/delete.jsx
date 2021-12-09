import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";

function PopupDelete({deleteActive, setDeleteActive, currentOffer}) {
  const dispatch = useDispatch();

  function close() {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    setDeleteActive(false);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = deleteActive ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        close();
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [deleteActive]);
  
  return(
    <>
    {(deleteActive) ? <FocusTrap>
    <div className={(deleteActive) ? "popup-card__active" : "popup-card"} 
      onClick={close}
    >
      <div className="popup-card__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="popup-card__header">Удалить этот товар?</h2>
        <div className="popup-card__case">
          <img src="./image/electro-1-mini.png" />
          <div className="popup-card__description-wrapper">
            <h2 className="popup-card__description-header">{currentOffer.name}</h2>
            <p className="popup-card__text">Артикул: {currentOffer.article}</p>
            <p className="popup-card__text">{currentOffer.type}, {currentOffer.strings} струнная </p>
            <p className="popup-card__price">Цена: {currentOffer.price} ₽</p>
          </div>
          <div className="popup-card__button-wrapper">
            <button className="popup-card__button" onClick={() => {
              dispatch(ActionCreator.deleteFromCard(currentOffer));
              close();
              }}>Удалить товар</button>
            <button className="popup-card__button-continue" onClick={close}>Продолжить покупки</button>
          </div>
        </div>
        <button className="popup-card__close" onClick={close}></button>
      </div>
    </div>
    </FocusTrap>: null}
    </>
  );
}

export default PopupDelete;