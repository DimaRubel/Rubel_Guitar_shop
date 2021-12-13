import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOUR, NULL, ONE, PAGE, THREE, TWO } from "../../const";
import { ActionCreator } from "../../store/action";

function Pagination() {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.offerPagination.currentIndex ) + ONE;
  const offer = useSelector((state) => state.reducer.filteredOffer);
  let pageCount = Math.trunc(offer.length/ PAGE);
  
  if(offer.length / PAGE > pageCount) {
    pageCount +=1;
  }
  return(
    <div className="pagination">
      {(currentIndex > ONE) ? <button className="page__continue pagination__layout" 
        onClick={() => dispatch(ActionCreator.changePagination(-ONE))}>Назад</button> : null}

      {(pageCount > ONE) ? <span className={`page__pagination page__pagination${currentIndex === ONE ? "-active" : ""}`}
        onClick={() => dispatch(ActionCreator.setCurrentPagination(NULL))}>
        {ONE}</span> : null}

      {(pageCount > ONE && currentIndex < THREE || pageCount === THREE) ? <span className={`page__pagination page__pagination${currentIndex === TWO ? "-active" : ""} `}
        onClick={() => dispatch(ActionCreator.setCurrentPagination(ONE))}>
        {TWO}</span> : null}

      {(pageCount > THREE && currentIndex > TWO) ? <span className="page__pagination">...</span> : null}

      {(pageCount > FOUR && currentIndex > TWO && currentIndex < pageCount - ONE) ? 
        <span className="page__pagination page__pagination-active">
        {currentIndex}</span> : null}

      {(pageCount > THREE  && currentIndex < pageCount - ONE) ? 
        <span className="page__pagination">...</span> : null}

      {(pageCount > THREE && currentIndex >= pageCount - ONE) ? <span className={`page__pagination page__pagination${currentIndex === pageCount - ONE ? "-active" : ""}`} 
        onClick={() => dispatch(ActionCreator.setCurrentPagination(pageCount - TWO))}>
        {pageCount - ONE}</span> : null}

      {(pageCount > TWO) ? <span className={`page__pagination page__pagination${currentIndex === pageCount ? "-active" : ""}`}
        onClick={() => dispatch(ActionCreator.setCurrentPagination(pageCount - ONE))}>
        {pageCount}</span> : null}

      {(currentIndex < pageCount) ? <button className="page__continue"
        onClick={() => dispatch(ActionCreator.changePagination(ONE))}>Далее</button> : null}
    </div>
  )
}

export default Pagination;