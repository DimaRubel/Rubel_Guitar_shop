import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContent from '../main-content/main-content';

function Main({offer}) { 
 
  return(
    <div className="body__wrapper">
      <Header />
      <MainContent offer={offer}/>
      <Footer/>
    </div>
  );
}

export default Main;