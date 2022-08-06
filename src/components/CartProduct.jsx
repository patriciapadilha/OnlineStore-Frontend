import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartProduct extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      quantity,
      availableQuantity,
      increaseItemInCart,
      decreaseItemInCart,
      removeItem,
      index,
    } = this.props;
    return (
      <div className="container-item-cart">
        <button
          type="button"
          name="removeBtn"
          id="removeBtn"
          onClick={ () => removeItem(index) }
        >
          X
        </button>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <div className="change-quantity">
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="removeItem"
            id="removeItem"
            onClick={ () => decreaseItemInCart(index) }
            disabled={ quantity <= 0 }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
          <button
            data-testid="product-increase-quantity"
            type="submit"
            name="addItem"
            id="addItem"
            onClick={ () => increaseItemInCart(index) }
            disabled={ availableQuantity <= 0 }
          >
            +
          </button>
        </div>
        <span>{ `R$ ${(price * quantity).toFixed(2)}` }</span>
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseItemInCart: PropTypes.func.isRequired,
  decreaseItemInCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
