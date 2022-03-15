import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class SearchByCategory extends Component {
  render() {
    const { productsCardCategory } = this.props;

    const products = (
      productsCardCategory.map(({ title, thumbnail, price, id }, key) => (
        <Card
          key={ key }
          title={ title }
          thumbSrc={ thumbnail }
          price={ price }
          id={ id }
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
  })).isRequired,
};
