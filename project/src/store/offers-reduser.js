import { SortField } from "../const";
import { filterOffer } from "../filters/filters";
import { sortList } from "../sorting/sorting";
import { ActionType } from "./action";

const initialState = {
  offer: [],
  filteredOffer: [],
  fieldForSort: SortField.PRICE,
  sortType: 1,
  filterPrice: {
    min: 0,
    max: 0,
  },
  filterType: [],
  filterStrings: [],
  currentIndex: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        filteredOffer: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
        filteredOffer: sortList([...state.filteredOffer], state.fieldForSort, action.payload),
      };
    case ActionType.CHANGE_SORT_FIELD:
      return {
        ...state,
        fieldForSort: action.payload,
        filteredOffer: sortList([...state.filteredOffer], action.payload, state.sortType),
      };
    case ActionType.CHANGE_FILTER_PRICE: 
      return {
        ...state,
        filterPrice: action.payload,
      }
    case ActionType.SHOW_FILTER_RESULT: 
      return {
        ...state,
        filteredOffer: filterOffer([...state.filteredOffer], state.filterPrice, state.filterType, state.filterStrings),
      }
    case ActionType.CHANGE_FILTER_TYPE:
      return {
        ...state,
        currentIndex: 0,
        filterType: action.payload.isDelete 
          ? state.filterType.filter((type) => type !== action.payload.type)
          : [action.payload.type, ...state.filterType],
      }
    case ActionType.CHANGE_FILTER_STRING:
      return {
        ...state,
        filterStrings: action.payload.isDelete 
          ? state.filterStrings.filter((type) => type !== action.payload.type)
          : [action.payload.type, ...state.filterStrings],
      }
    case ActionType.CHANGE_CURRENT_PAGINATION: 
      return {
        ...state,
        currentIndex: state.currentIndex + action.payload,
      }
      case ActionType.SET_CURRENT_PAGINATION: 
      return {
        ...state,
        currentIndex: action.payload,
      }
  }
};

export {reducer};