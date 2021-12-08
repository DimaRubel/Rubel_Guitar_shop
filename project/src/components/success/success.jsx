import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function Success({success,successClose}) {
  return(
    <div className={ "success"} onClick={evt => successClose(false)}>
      <div className="success__wrapper" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="success__header">Товар успешно добавлен в корзину</h2>
        <div className="success__button-wrapper">
          <Link to={AppRoute.CONVERTER} className="success__basket">Перейти в корзину</Link>
          <button className="success__continue">Продолжить покупки</button>
        </div>
        <button className="success__close" onClick={evt => successClose(false)}></button>
      </div>
    </div>
  ); 
}

export default Success;