import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortField, TypeFilter, TypeNumber } from "../../const";
import { ActionCreator } from "../../store/action";
import Offer from "../offer/offer";
import Price from "../price/price";

function MainContent({offer}) {
  const pages = [1,2,3,4];
  const dispatch = useDispatch();
  const currentSortField = useSelector((state) => state.fieldForSort);
  const currentSortType = useSelector((state) => state.sortType);
  const currentIndex = useSelector((state) => state.currentIndex);

  function changeGuitarType(evt) {
    dispatch(ActionCreator.changeFilterType({
      type: evt.target.dataset.type,
      isDelete: !evt.target.checked,
    }));
  }

  function changeNumberString(evt) {
    dispatch(ActionCreator.changeFilterString({
      type: evt.target.dataset.type,
      isDelete: !evt.target.checked,
    }));
  }

  return(
    <main className="main">
      <section className="catalog">
        <h1 className="visually-hidden">Каталог</h1>
        
        <div className="image-back">
          <div className="image-back__layout"></div>
        </div>
        <div className="catalog__wrapper">
          <h2 className="catalog__header">Каталог гитар</h2>
          <div className="catalog__nav-wrapper">
            <h3 className="catalog__nav">Главная</h3>
            <h3 className="catalog__nav">Каталог</h3>
          </div>
        </div>

        <div className="catalog__container">
            <h3 className="sort__header">Фильтр</h3>
            <div className="sort__wrapper">
              <h3 className="sort__header-opacity">Сортировать:</h3>
              <button type="button" className={(currentSortField !== SortField.PRICE) ? "sort__text" : "sort__text-active"} 
              onClick={() => {
                dispatch(ActionCreator.changeSortField(SortField.PRICE));
              }}>по цене</button>
              <button type="button" className={(currentSortField !== SortField.POPULAR) ? "sort__text" : "sort__text-active"} 
              onClick={() => {
                dispatch(ActionCreator.changeSortField(SortField.POPULAR));
              }}>по популярности</button>
            </div>
            <div className="sort__wrapper-button">
              <button type="button" className={`filter__button-up${currentSortType === 1 ? "-active" : ""}`} 
              onClick={() => {
                dispatch(ActionCreator.changeSortType(1));
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z" fill="black"/>
                </svg>
              </button>
              <button type="button" className={`filter__button-down${currentSortType === 1 ? "-active" : ""}`}
               onClick={() => {
                dispatch(ActionCreator.changeSortType(-1));
              }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z" fill="#6C6C6C"/>
              </svg></button>
            </div>

          <div className="filter">
            <form>
             <Price />

              <div className="filter__type">
                <h3 className="filter__header">Тип гитар</h3>
                <input data-type={TypeFilter.ACUSTIC} id="acustic" className="filter__input-checkbox" type="checkbox" onChange={changeGuitarType} />
                <label className="filter__label" htmlFor="acustic" >Акустические гитары</label>
                <input data-type={TypeFilter.ELECTROGUITAR} id="electro" className="filter__input-checkbox" type="checkbox" onChange={changeGuitarType} />
                <label className="filter__label" htmlFor="electro" >Электрогитары</label>
                <input data-type={TypeFilter.UKYLELE} id="ucylele" className="filter__input-checkbox" type="checkbox" onChange={changeGuitarType} />
                <label className="filter__label" htmlFor="ucylele" >Укулеле</label>
              </div>

              <div className="filter__number">
                <h3 className="filter__header">Количество струн</h3>
                <input data-type={TypeNumber.FOUR} id="4" className="filter__input-checkbox" type="checkbox" onChange={changeNumberString} />
                <label className="filter__label" htmlFor="4" >4</label>
                <input data-type={TypeNumber.SIX} id="6" className="filter__input-checkbox" type="checkbox" onChange={changeNumberString} />
                <label className="filter__label" htmlFor="6" >6</label>
                <input data-type={TypeNumber.SEVEN} id="7" className="filter__input-checkbox" type="checkbox" onChange={changeNumberString} />
                <label className="filter__label" htmlFor="7" >7</label>
                <input data-type={TypeNumber.TWELWE} id="12" className="filter__input-checkbox" type="checkbox" onChange={changeNumberString} />
                <label className="filter__label" htmlFor="12" >12</label>
              </div>
              <button className="filter__button" onClick={(evt) => {
                evt.preventDefault();
                dispatch(ActionCreator.showFilterResult());
              }} >Показать</button>
            </form>
          </div>

         <div className="content">
            {offer.slice(currentIndex, 9).map((currentOffer) => 
              <Offer 
                key={currentOffer.id} 
                currentOffer={currentOffer} 
              />)
            }
          <div className="pagination">
            {pages.map((page, index) => <span key={index} className="page__pagination page__pagination-active">{page}</span>)}
            <button className="page__continue">Далее</button>
          </div>
          </div>
        </div>
        <div className="image-back-foother">
          <div className="image-back__layout-foother"></div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;