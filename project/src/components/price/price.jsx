import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { ActionCreator } from "../../store/action";
ActionCreator

function Price() {
  const [min, setMin] = useState('');
  const [max, setMax]  = useState('');
  const dispatch = useDispatch();

  function validateMin() {
    if(max === '') {
      dispatch(ActionCreator.changeFilterPrice({min,max: 0}));
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
      dispatch(ActionCreator.changeFilterPrice({min: 0,max}));
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
      <label className="visually-hidden">от</label>
      <NumberFormat className="filter__input" value={min} onValueChange={(e) => {
        setMin((e.floatValue < 0) ? -e.floatValue : e.floatValue);
      }} onBlur={validateMin} />
      <label className="visually-hidden">до</label>
      <NumberFormat className="filter__input" value={max} onValueChange={(e) => {
        setMax((e.floatValue < 0) ? -e.floatValue : e.floatValue);
      }} onBlur={validateMax} />
    </div>
  );
}

export default Price;