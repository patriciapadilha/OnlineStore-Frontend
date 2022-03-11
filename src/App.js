import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShowProduct from './Pages/ShoppingCart/ShowProduct';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <HomePage imgsrc="./cartIcon.png" /> }
          />
          <Route exact path="/ShoppingCart" component={ ShowProduct } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
