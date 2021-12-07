import React from "react";

function Success() {
  return(
    <div className="success">
      <div className="success__wrapper">
        <h2 className="success__header">Товар успешно добавлен в корзину</h2>
        <div className="success__button-wrapper">
          <button className="success__basket">Перейти в корзину</button>
          <button className="success__continue">Продолжить покупки</button>
        </div>
        <button className="success__close"></button>
      </div>
    </div>
  ); 
}

export default Success;