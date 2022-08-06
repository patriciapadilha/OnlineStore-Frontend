import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ quantity: Number(value) });
  }

  render() {
    const { title, thumbSrc, price, id, addItem, availableQuantity } = this.props;
    const { quantity } = this.state;
    return (
      <div className="card-item">
        <Link data-testid="product-detail-link" to={ `/product-detail/${id}` }>
          <div data-testid="product" className="card">
            <p>{title}</p>
            <img src={ thumbSrc } alt={ `Imagem de ${title}` } />
            <p>{`Valor R$ ${price}`}</p>
            Ver detalhes:
          </div>
        </Link>
        <label
          className="quantity"
          htmlFor="quantity"
          datatestid="shopping-cart-product-quantity"
        >
          Quantidade:
          <input
            type="number"
            name="quantity"
            value={ quantity }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="product-add-to-cart"
          type="button"
          name="addToCart"
          onClick={ () => addItem({
            title,
            price,
            thumbnail: thumbSrc,
            quantity,
            available_quantity: availableQuantity,
          }) }
        >
          Adicionar ao carrinho
        </button>
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
  addItem: PropTypes.func.isRequired,
};
