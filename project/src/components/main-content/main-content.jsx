import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountStringsOfType, FOUR, NULL, ONE, PAGE, SEVEN, SIX, SortField, TWELWE, TypeFilter, TypeNumber, TypeOfCountStrings } from "../../const";
import { ActionCreator } from "../../store/action";
import Offer from "../offer/offer";
import Pagination from "../pagination/pagination";
import Price from "../price/price";
import propTypes from 'prop-types';

function MainContent({offer}) {
  const dispatch = useDispatch();
  const currentSortField = useSelector((state) => state.fieldForSort);
  const currentSortType = useSelector((state) => state.sortType);
  const currentIndex = useSelector((state) => state.currentIndex);
  const currentFilterType = useSelector((state) => state.filterType);
  const cuerrentFilterStrings = useSelector((state) => state.filterStrings);
   
  const accessibleStringCount = currentFilterType
    .flatMap((type) => CountStringsOfType[type])
    .filter((value, index, self) => self.indexOf(value) === index);
  
  const accessibleType = cuerrentFilterStrings
    .flatMap((type) => TypeOfCountStrings[type])
    .filter((value, index, self) => self.indexOf(value) === index);

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
            <div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1459 4.64592C10.1924 4.59935 10.2475 4.56241 10.3083 4.5372C10.369 4.512 10.4341 4.49902 10.4999 4.49902C10.5657 4.49902 10.6308 4.512 10.6916 4.5372C10.7523 4.56241 10.8075 4.59935 10.8539 4.64592L13.8539 7.64592C13.9005 7.69236 13.9374 7.74754 13.9626 7.80828C13.9878 7.86903 14.0008 7.93415 14.0008 7.99992C14.0008 8.06568 13.9878 8.13081 13.9626 8.19155C13.9374 8.2523 13.9005 8.30747 13.8539 8.35392L10.8539 11.3539C10.76 11.4478 10.6327 11.5005 10.4999 11.5005C10.3671 11.5005 10.2398 11.4478 10.1459 11.3539C10.052 11.26 9.99929 11.1327 9.99929 10.9999C9.99929 10.8671 10.052 10.7398 10.1459 10.6459L12.7929 7.99992L10.1459 5.35392C10.0994 5.30747 10.0624 5.2523 10.0372 5.19155C10.012 5.13081 9.99902 5.06568 9.99902 4.99992C9.99902 4.93415 10.012 4.86903 10.0372 4.80828C10.0624 4.74754 10.0994 4.69236 10.1459 4.64592Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13C13.1326 7.5 13.2598 7.55268 13.3536 7.64645C13.4473 7.74021 13.5 7.86739 13.5 8C13.5 8.13261 13.4473 8.25979 13.3536 8.35355C13.2598 8.44732 13.1326 8.5 13 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8Z" fill="black"/>
              </svg>
            </div>
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

            <div className="sort__wrapper-button">
                <button type="button" className={`filter__button-up${currentSortType === ONE ? "-active" : ""}`} 
                onClick={() => {
                  dispatch(ActionCreator.changeSortType(ONE));
                }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.58301 15.667H17.4163L10.9997 5.58366L4.58301 15.667Z" fill="black"/>
                  </svg>
                </button>
                <button type="button" className={`filter__button-down${currentSortType === -ONE ? "-active" : ""}`}
                onClick={() => {
                  dispatch(ActionCreator.changeSortType(-ONE));
                }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.417 5.33301L4.58366 5.33301L11.0003 15.4163L17.417 5.33301Z" fill="#6C6C6C"/>
                </svg></button>
            </div>
            </div>
            

          <div className="filter">
            <form>
             <Price />

              <div className="filter__type">
                <h3 className="filter__header">Тип гитар</h3>
                <input data-type={TypeFilter.ACUSTIC} id="acustic" className="filter__input-checkbox"
                  type="checkbox" 
                  onChange={changeGuitarType}
                  disabled={accessibleType.length !== NULL && !accessibleType.includes(TypeFilter.ACUSTIC) && !currentFilterType.includes(TypeFilter.ACUSTIC)} />
                <label className="filter__label" htmlFor="acustic" >Акустические гитары</label>
                <input data-type={TypeFilter.ELECTROGUITAR} id="electro" className="filter__input-checkbox"
                  type="checkbox" 
                  onChange={changeGuitarType}
                  disabled={accessibleType.length !== NULL && !accessibleType.includes(TypeFilter.ELECTROGUITAR) && !currentFilterType.includes(TypeFilter.ELECTROGUITAR)} />
                <label className="filter__label" htmlFor="electro" >Электрогитары</label>
                <input data-type={TypeFilter.UKYLELE} id="ucylele" className="filter__input-checkbox" 
                  type="checkbox" 
                  onChange={changeGuitarType}
                  disabled={accessibleType.length !== NULL && !accessibleType.includes(TypeFilter.UKYLELE) && !currentFilterType.includes(TypeFilter.UKYLELE)} />
                <label className="filter__label" htmlFor="ucylele" >Укулеле</label>
              </div>

              <div className="filter__number">
                <h3 className="filter__header">Количество струн</h3>
                <input data-type={TypeNumber.FOUR} id="4" className="filter__input-checkbox"
                  type="checkbox"
                  onChange={changeNumberString}
                  disabled={accessibleStringCount.length !== NULL && 
                  !accessibleStringCount.includes('4') && !cuerrentFilterStrings.includes("4")} />
                <label className="filter__label" htmlFor="4" >4</label>
                <input data-type={TypeNumber.SIX} id="6" className="filter__input-checkbox" 
                  type="checkbox"
                  onChange={changeNumberString}
                  disabled={accessibleStringCount.length !== NULL && 
                  !accessibleStringCount.includes('6') && !cuerrentFilterStrings.includes("6")} />
                <label className="filter__label" htmlFor="6" >6</label>
                <input data-type={TypeNumber.SEVEN} id="7" className="filter__input-checkbox" 
                  type="checkbox"
                  onChange={changeNumberString}
                  disabled={accessibleStringCount.length !== NULL && 
                  !accessibleStringCount.includes('7') && !cuerrentFilterStrings.includes("7")} />
                <label className="filter__label" htmlFor="7" >7</label>
                <input data-type={TypeNumber.TWELWE} id="12" className="filter__input-checkbox"
                  type="checkbox"
                  onChange={changeNumberString}
                  disabled={accessibleStringCount.length !== NULL && 
                  !accessibleStringCount.includes('12') && !cuerrentFilterStrings.includes("12")} />
                <label className="filter__label" htmlFor="12" >12</label>
              </div>
              <button className="filter__button" onClick={(evt) => {
                evt.preventDefault();
                dispatch(ActionCreator.showFilterResult());
              }} >Показать</button>
            </form>
          </div>

         <div className="content">
            {offer.slice(currentIndex * PAGE, currentIndex * PAGE + PAGE).map((currentOffer) => 
              <Offer 
                key={currentOffer.id} 
                currentOffer={currentOffer} 
              />)
            }
          </div>
          <Pagination/>
        </div>
        <div className="image-back-foother">
          <div className="image-back__layout-foother"></div>
        </div>
      </section>
    </main>
  );
}

MainContent.propTypes = {
  offer: propTypes.array,
}

export default MainContent;