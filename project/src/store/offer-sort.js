import { SortField } from "../const";
import { ActionType } from "./action";

const initialState = {
  fieldForSort: SortField.PRICE,
  filteredOffer: [],
  sortType: 1,
  card: [],
}

export const offersSort = (state = initialState, action) => {
  switch (action.type) {
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
    case ActionType.UP:
      return {
        ...state,
        card: [...state.card.map((offer)=> {
          if(offer.offer === action.payload) {
            offer.count += 1;
          }
          return offer;
        })],
      }
      case ActionType.DOWN:
        return {
          ...state,
          card: [...state.card.map((offer)=> {
            if(offer.offer === action.payload) {
              offer.count -= 1;
            }
            return offer;
          }).filter((offer)=> offer.count > 0)],
        }
    default: 
      return state;
  }
}