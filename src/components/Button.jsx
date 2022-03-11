import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    const { imgsrc } = this.props;
    return (
      <Link to="/ShoppingCart" data-testid="shopping-cart-button">
        <img
          src={ imgsrc }
          width="50px"
          alt="carrinho de compra"
          className="shopping-cart-img"
        />
      </Link>
    );
  }
}
Button.propTypes = { imgsrc: PropTypes.string.isRequired };
