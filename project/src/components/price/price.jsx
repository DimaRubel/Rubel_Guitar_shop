import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { NULL } from "../../const";
import { ActionCreator } from "../../store/action";
ActionCreator

function Price() {
  const [min, setMin] = useState('');
  const [max, setMax]  = useState('');
  const dispatch = useDispatch();

  function validateMin() {
    if(max === '') {
      dispatch(ActionCreator.changeFilterPrice({min,max: NULL}));
      return;
    };
    if(min> max) {
      dispatch(ActionCreator.changeFilterPrice({min: max,max}));
      setMin(max);
      return;
    }
    dispatch(ActionCreator.changeFilterPrice({min,max}));
  }

  function validateMax() {
    if(min === '') {
      dispatch(ActionCreator.changeFilterPrice({min: NULL,max}));
      return;
    };
    if(min > max) {
      dispatch(ActionCreator.changeFilterPrice({min,max: min}));
      setMax(min);
      return;
    }
    dispatch(ActionCreator.changeFilterPrice({min,max}));
  }
  return(
    <div className="filter__price">
      <h3 className="filter__header">Цена, ₽</h3>
      <div className="filter__wrapper">
        <label className="visually-hidden" htmlFor="before">от</label>
        <NumberFormat className="filter__input" value={min} onValueChange={(e) => {
          setMin((e.floatValue < NULL) ? -e.floatValue : e.floatValue);
        }} onBlur={validateMin} 
        id="before"
        placeholder="1000"
        />
        <div>
          <svg width="14" height="1" viewBox="0 0 14 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="0.5" x2="14" y2="0.5" stroke="#585757"/>
          </svg>
        </div>
        <label className="visually-hidden" htmlFor="after">до</label>
        <NumberFormat className="filter__input" value={max} onValueChange={(e) => {
          setMax((e.floatValue < NULL) ? -e.floatValue : e.floatValue);
        }} onBlur={validateMax} 
          id="after"
          placeholder="30 000"
        />
      </div>
    </div>
  );
}

export default Price;