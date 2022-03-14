import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    api.getProductsDetailsById(id).then((response) => {
      this.setState = ({
        product: { ...response },
      });
    });
    console.log(this.state.product);
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2> tes </h2>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
