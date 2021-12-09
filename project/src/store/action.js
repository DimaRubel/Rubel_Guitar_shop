export const ActionType = {
  LOAD_OFFER: 'offer/loadOffer',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
  CHANGE_SORT_FIELD: 'sort/changeSortField',
  CHANGE_FILTER_PRICE: 'filter/changeFilterPrice',
  CHANGE_FILTER_TYPE: 'filter/changeFilterType',
  CHANGE_FILTER_STRING: 'filter/changeFilterString',
  SHOW_FILTER_RESULT: 'filter/showFilterResult',
  CHANGE_CURRENT_PAGINATION: 'filter/currentPagination',
  SET_CURRENT_PAGINATION: 'filter/setCurrentPagination',
  ADD_TO_CARD: 'card/addToCard',
  DELETE_FROM_CARD: 'card/deleteFromCard',
  UP: 'up',
  DOWN: 'down',
};

export const ActionCreator = {
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFER,
    payload: offers,
  }),
  changeSortType: (type) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: type,
  }),
  changeSortField: (field) => ({
    type: ActionType.CHANGE_SORT_FIELD,
    payload: field,
  }),
  changeFilterPrice: (price) => ({
    type: ActionType.CHANGE_FILTER_PRICE,
    payload: price,
  }),
  changeFilterType: (type) => ({
    type: ActionType.CHANGE_FILTER_TYPE,
    payload: type,
  }),
  changeFilterString: (string) => ({
    type: ActionType.CHANGE_FILTER_STRING,
    payload: string,
  }),
  showFilterResult: () => ({
    type: ActionType.SHOW_FILTER_RESULT,
    payload: '',
  }),
  changePagination: (filter) => ({
    type: ActionType.CHANGE_CURRENT_PAGINATION,
    payload: filter,
  }),
  setCurrentPagination: (filter) => ({
    type: ActionType.SET_CURRENT_PAGINATION,
    payload: filter,
  }),
  addToCard: (offer) => ({
    type: ActionType.ADD_TO_CARD,
    payload: offer,
  }),
  deleteFromCard: (offer) => ({
    type: ActionType.DELETE_FROM_CARD,
    payload: offer,
  }),
  changeUp: (offer) => ({
    type: ActionType.UP,
    payload: offer,
  }),
  changeDown: (offer) => ({
    type: ActionType.DOWN,
    payload: offer,
  }),
}