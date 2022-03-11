import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { title, thumbSrc, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbSrc } alt={ `Imagem de ${title}` } />
        <p>{`Valor R$ ${price.toFixed(2)}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  thumbSrc: PropTypes.string.isRequired
};
