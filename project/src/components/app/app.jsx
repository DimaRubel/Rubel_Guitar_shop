import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../../public/style/main.scss";
import { AppRoute } from "../../const";
import Basket from '../basket/basket';
import Main from '../main/main';
import NotFound from "../not-found/not-found";
import {useSelector} from 'react-redux';

function App() {
  const offer = useSelector((state) => state.reducer.filteredOffer);
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path={AppRoute.BASKET}>
            <Basket />
          </Route>
          <Route exact path={AppRoute.CONVERTER}>
            <Main offer={offer} />
          </Route>
          <Route>
            <NotFound />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;