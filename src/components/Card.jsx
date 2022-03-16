import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ quantity: Number(value) });
  }

  render() {
    const { title, thumbSrc, price, id,
      itemsCart, totalPrice, addItem, availableQuantity } = this.props;
    const { quantity } = this.state;
    console.log(itemsCart);
    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/product-detail/${id}` }>
          <div data-testid="product">
            <p>{title}</p>
            <img src={ thumbSrc } alt={ `Imagem de ${title}` } />
            <p>{`Valor R$ ${price}`}</p>
            Ver detalhes:
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          name="addToCart"
          onClick={ () => addItem({
            title, price, thumbSrc, quantity, availableQuantity,
          }) }
        >
          Adicionar ao carrinho
        </button>
        <label htmlFor="quantity" datatestid="shopping-cart-product-quantity">
          Quantidade:
          <input
            type="number"
            name="quantity"
            value={ quantity }
            className="quantity"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  itemsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
};
