import React, { Component } from 'react';
import CartProduct from '../components/CartProduct';

export default class ShowProduct extends Component {

  /* componentDidMount() {
    const { itemsCart } = this.props;
    const totalPrice = itemsCart.reduce((acumulador, proximoItem) => (
      acumulador + (proximoItem.price * proximoItem.quantity)
    ), 0);
    this.setState({ totalPrice });
  } */

  render() {
    const { totalPrice, itemsCart, increaseItemInCart,
      decreaseItemInCart, removeItem
    } = this.props
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        {itemsCart.length === 0
          ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )
          : (
            <div>
              {itemsCart.map((product, key) => (
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
              ))}
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