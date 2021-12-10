import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContent from '../main-content/main-content';
import propTypes from 'prop-types';

function Main({offer}) { 
 
  return(
    <div className="body__wrapper">
      <Header />
      <MainContent offer={offer}/>
      <Footer/>
    </div>
  );
}

Main.propTypes = {
  offer: propTypes.array,
}

export default Main;