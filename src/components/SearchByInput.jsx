import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class SearchByInput extends Component {
  render() {
    const { productsCardInput } = this.props;
    const products = (
      productsCardInput.map(({ title, thumbnail, price }, key) => (
        <Card
          key={ key }
          title={ title }
          thumbSrc={ thumbnail }
          price={ price }
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
  })).isRequired,
};
