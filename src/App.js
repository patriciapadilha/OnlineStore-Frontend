import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShowProduct from './Pages/ShoppingCart/ShowProduct';
import ProductDetail from './Pages/ProductDetail';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemsCart: [],
      totalPrice: 0,
    };
    this.increaseItemInCart = this.increaseItemInCart.bind(this);
    this.decreaseItemInCart = this.decreaseItemInCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem(event) {
    this.setState((previousState) => {
      const newItems = [...previousState.itemsCart, event];
      return {
        itemsCart: newItems,
        totalPrice: previousState.totalPrice + event.price,
      };
    });
  }

  increaseItemInCart(index) {
    this.setState((previousState) => {
      const newItems = [...previousState.itemsCart];
      const newItem = { ...newItems[index] };
      if (newItem.available_quantity > 0) {
        newItem.quantity += 1;
        newItem.available_quantity -= 1;
      }
      newItems[index] = newItem;
      return {
        itemsCart: newItems,
        totalPrice: previousState.totalPrice + newItem.price,
      };
    });
  }

  decreaseItemInCart(index) {
    this.setState((previousState) => {
      const newItems = [...previousState.itemsCart];
      const newItem = { ...newItems[index] };
      if (newItem.quantity > 0) {
        newItem.quantity -= 1;
        newItem.available_quantity += 1;
      }
      newItems[index] = newItem;
      return {
        itemsCart: newItems,
        totalPrice: previousState.totalPrice - newItem.price,
      };
    });
  }

  removeItem(index) {
    this.setState((previousState) => {
      const newItems = [...previousState.itemsCart];
      const newItem = { ...newItems[index] };
      newItems.splice(index, 1);
      return {
        itemsCart: newItems,
        totalPrice: previousState.totalPrice - newItem.price * newItem.quantity,
      };
    });
  }

  render() {
    const { itemsCart, totalPrice } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <HomePage
                imgsrc="./cartIcon.png"
                addItem={ this.addItem }
                itemsCart={ itemsCart }
                totalPrice={ totalPrice }
              />
            ) }
          />
          <Route
            exact
            path="/ShoppingCart"
            render={ () => (
              <ShowProduct
                itemsCart={ itemsCart }
                totalPrice={ totalPrice }
                increaseItemInCart={ this.increaseItemInCart }
                decreaseItemInCart={ this.decreaseItemInCart }
                removeItem={ this.removeItem }
              />
            ) }
          />
          <Route
            exact
            path="/product-detail/:id"
            render={ (props) => (
              <ProductDetail
                params={ props.match.params }
                addItem={ this.addItem }
                itemsCart={ itemsCart }
                totalPrice={ totalPrice }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
