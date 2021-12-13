import { ActionType } from "./action"

const initialState = {
  currentIndex: 0,
}

export const offerPagination = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
}