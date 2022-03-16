import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartProduct from '../components/CartProduct';

export default class ShowProduct extends Component {
  render() {
    const { totalPrice, itemsCart, increaseItemInCart,
      decreaseItemInCart, removeItem,
    } = this.props;
    const cart = itemsCart.map((product, key) => (
      <CartProduct
        key={ key }
        index={ key }
        title={ product.title }
        thumbnail={ product.thumbnail }
        price={ product.price }
        quantity={ product.quantity }
        availableQuantity={ product.available_quantity }
        increaseItemInCart={ increaseItemInCart }
        decreaseItemInCart={ decreaseItemInCart }
        removeItem={ removeItem }
      />
    ));
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        {itemsCart.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )
          : (
            <div>
              { cart }
              <h3>{ `Valor total de Compra R$ ${totalPrice.toFixed(2)}` }</h3>
              <button
                type="submit"
              >
                Finalizar Compra
              </button>
            </div>
          )}
      </div>
    );
  }
}

ShowProduct.propTypes = {
  itemsCart: PropTypes.node.isRequired,
  totalPrice: PropTypes.number.isRequired,
  increaseItemInCart: PropTypes.func.isRequired,
  decreaseItemInCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
