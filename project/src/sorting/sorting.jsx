import { SortField } from "../const";

export const  sortList = (offer, field, type) => {
  switch (field) {
    case SortField.PRICE:
      return offer.sort((a, b) => (a.price - b.price) * type);
    case SortField.POPULAR:
      return offer.sort((a,b) => (a.popular - b.popular) * type);
    default:
      return offer;
  }
};

export function addMask(number, isFloat) {
  let formater = new Intl.NumberFormat('ru', {minimumFractionDigits: (isFloat)?2:0});
  return formater.format(number);
}