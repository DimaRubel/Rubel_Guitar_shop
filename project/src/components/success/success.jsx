import FocusTrap from "focus-trap-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Success({success,successClose}) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = success ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        body.style.overflow = 'auto';
        successClose(false);
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [success]);
  return(
    <>
   {(success ) ? <FocusTrap>
   <div className={ "success"} onClick={evt => successClose(false)}>
      <div className="success__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="success__header">Товар успешно добавлен в корзину</h2>
        <div className="success__button-wrapper">
          <Link to={AppRoute.BASKET} className="success__basket" onClick={() => {
            const body = document.querySelector('body');
            body.style.overflow = 'auto'
            }}>Перейти в корзину</Link>
          <button className="success__continue" onClick={() => successClose(false)}>Продолжить покупки</button>
        </div>
        <button className="success__close" onClick={evt => successClose(false)}></button>
      </div>
    </div>
    </FocusTrap> : null}
  </>
  ); 
}

export default Success;