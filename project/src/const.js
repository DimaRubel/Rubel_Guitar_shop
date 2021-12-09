export const AppRoute = {
  CONVERTER: '/',
  BASKET: '/basket',
  ROOM: '/room',
};

export const SortField = {
  POPULAR: 'Popular',
  PRICE: 'Price',
};

export const TypeNumber = {
  FOUR: '4',
  SIX: '6',
  SEVEN: '7',
  TWELWE: '12',
};

export const ONE = 1;
export const NULL = 0;
export const PAGE = 9;
export const TWO = 2;
export const THREE = 3;
export const FOUR = 4;
export const SIX = 6;
export const SEVEN = 7;
export const TWELWE = 12;

export const Promocodes = {
  GITARAHIT: (summ) => summ * 0.9,
  SUPERGITARA: (summ) => summ - 700,
  GITARA2020: (summ) => summ * 0.3 > 3000 ? 3000: summ * 0.3,
};

export const TypeFilter = {
  ELECTROGUITAR: 'electroguitar',
  UKYLELE: 'ukylele',
  ACUSTIC: 'acustic',
};

export const TypeName = {
  electroguitar: 'электрогитара',
  ukylele: 'укулеле',
  acustic: 'акустическая гитара',
};

export const CountStringsOfType = {
  electroguitar: [4, 6, 7],
  ukylele: [4],
  acustic: [6, 7, 12],
};

export const TypeOfCountStrings = {
  4: ['ukylele','electroguitar'],
  6: ['electroguitar','acustic'],
  7: ['electroguitar','acustic'],
  12: ['acustic'],
}