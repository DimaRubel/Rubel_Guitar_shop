import { SortField, TypeFilter, TypeName, TypeNumber } from "../const";
import { ActionType } from "./action";

const initialState = {
  fieldForSort: SortField.PRICE,
  filteredOffer: [],
  sortType: 1,
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