import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class SearchByInput extends Component {
  render() {
    const { productsCardInput, itemsCart, totalPrice, addItem } = this.props;
    const products = (
      productsCardInput.map((product, key) => (
        <Card
          key={ key }
          title={ product.title }
          thumbSrc={ product.thumbnail }
          price={ product.price }
          id={ product.id }
          availableQuantity={ product.available_quantity }
          itemsCart={ itemsCart }
          totalPrice={ totalPrice }
          addItem={ addItem }
        />
      ))
    );
    return (
      <span className="allProductsByInput">
        { products }
      </span>
    );
  }
}

SearchByInput.propTypes = {
  productsCardInput: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    availableQuantity: PropTypes.number,
  })).isRequired,
  itemsCart: PropTypes.node.isRequired,
  totalPrice: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
};
