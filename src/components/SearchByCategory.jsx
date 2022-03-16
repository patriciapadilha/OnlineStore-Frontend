import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class SearchByCategory extends Component {
  render() {
    const { productsCardCategory, itemsCart, totalPrice, addItem } = this.props;

    const products = (
      productsCardCategory.map((product, key) => (
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
      <div className="allProductsByCategory">
        { products }
      </div>
    );
  }
}

SearchByCategory.propTypes = {
  productsCardCategory: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    availableQuantity: PropTypes.number,
  })).isRequired,
  itemsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalPrice: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
};
