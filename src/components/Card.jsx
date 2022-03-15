import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { title, thumbSrc, price, id } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/product-detail/${id}` }
      >
        <div data-testid="product">
          <p>{ title }</p>
          <img src={ thumbSrc } alt={ `Imagem de ${title}` } />
          <p>{`Valor R$ ${price.toFixed(2)}`}</p>
          Ver detalhes:
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
