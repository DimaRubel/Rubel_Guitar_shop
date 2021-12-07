import React from "react";
import BasketContent from "../basket-content/basket-content";
import Footer from "../footer/footer";
import Header from "../header/header";

function Basket() {
  return(
    <div className="body__wrapper">
      <Header />
      <BasketContent/>
      <Footer />
    </div>
  );
}

export default Basket;