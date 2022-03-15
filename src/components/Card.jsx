import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { title, thumbSrc, price, id } = this.props;
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
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        <label htmlFor="quantity" datatestid="shopping-cart-product-quantity">
          Quantidade:
          <input
            type="number"
            name="quantity"
            className="quantity"
            defaultValue={ 1 }
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
};
