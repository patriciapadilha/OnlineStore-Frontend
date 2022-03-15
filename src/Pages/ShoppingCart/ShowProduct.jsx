import React, { Component } from 'react';

export default class ShowProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInCart: [],
    };
  }

  componentDidMount() {
    this.showProductsInCart();
  }

  showProductsInCart = () => {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ productsInCart: storage });
  };

  render() {
    const { productsInCart } = this.state;
    return (
      <div>
        {productsInCart ? (
          productsInCart.map((items) => (
            <div key={ items.id }>
              <p data-testid="shopping-cart-product-name">{ items.title }</p>
              <p data-testid="shopping-cart-product-quantity">
                <label
                  htmlFor="quantity"
                  datatestid="shopping-cart-product-quantity"
                >
                  Quantidade:
                  <input
                    type="number"
                    name="quantity"
                    className="quantity"
                    defaultValue={ 1 }
                  />
                </label>
              </p>
            </div>
          ))
        ) : (
          <div data-testid="shopping-cart-empty-message">
            <p>Seu carrinho está vazio</p>
          </div>
        )}
        );
      </div>
    );
  }
}
