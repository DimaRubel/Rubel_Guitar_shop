import { SortField, TypeFilter, TypeName, TypeNumber } from "../const";
import { filterOffer } from "../filters/filters";
import { offer } from "../mock/mock";
import { sortList } from "../sorting/sorting";
import { ActionType } from "./action";


const initialState = {
  offer: offer,
  filteredOffer: offer,
  fieldForSort: SortField.PRICE,
  sortType: 1,
  filterPrice: {
    min: 0,
    max: 0,
  },
  filterType: [],
  filterStrings: [],
  currentIndex: 0,
  card: [
 {offer: {
    id: 1,
    article: "SO757575",
    name: "Честер Bass",
    type: TypeName[TypeFilter.ELECTROGUITAR],
    popular: 15,
    strings: TypeNumber.SEVEN,
    price: 17500,
    image: 'electro-1.png'
  }, count: 1},
  {offer: {
    id: 2,
    article: "TK129049",
    name: "СURT Z300",
    type: TypeName[TypeFilter.ELECTROGUITAR],
    popular: 9,
    strings: TypeNumber.SIX,
    price: 29500,
    image: 'electro-2.png'
  }, count: 1}],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        offer: action.payload,
        filteredOffer: action.payload,
      };
    case ActionType.ADD_TO_CARD: 
      const item = {
        offer: action.payload,
        count: 1,
      }
      return {
        ...state,
        card: [item, ...state.card],
      }
      case ActionType.CHANGE_FILTER_PRICE: 
      return {
        ...state,
        filterPrice: action.payload,
      }
    case ActionType.SHOW_FILTER_RESULT: 
      return {
        ...state,
        currentIndex: 0,
        filteredOffer: sortList(filterOffer(
          [...state.offer], state.filterPrice, state.filterType, state.filterStrings),
          state.fieldForSort,state.sortType),
      }
    case ActionType.CHANGE_FILTER_TYPE:
      return {
        ...state,
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
    case ActionType.DELETE_FROM_CARD: 
      return {
        ...state,
        card: [...state.card.filter((offer)=> offer.offer !== action.payload)],
      }
      default: 
        return state;
  }
};

export {reducer};