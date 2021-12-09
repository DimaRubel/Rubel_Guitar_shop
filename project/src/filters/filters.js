import { TypeName } from "../const";

export const filterOffer = (offers, price, types, strings) => {
   return offers
          .filter((offer) => {
            if(price.max === 0) return offer.price >= price.min;
            return offer.price >= price.min && offer.price <= price.max;
          })
          .filter((offer) => {
            if(types.length === 0) return true;
            return types.map((type) => TypeName[type]).includes(offer.type)
          })
          .filter((offer) => {
            if(strings.length === 0) return true;
            return strings.includes(offer.strings);
          });
}