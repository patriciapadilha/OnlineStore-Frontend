import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const { params } = this.props;
    const { id } = params;
    api.getProductsDetailsById(id).then((response) => (
      this.setState({
        product: response,
      })
    ));
  }

  render() {
    const { product } = this.state;
    return !product ? (
      <p>Carregando..</p>
    ) : (
      <div>
        <h3 data-testid="product-detail-name">
          <p data-testid="shopping-cart-product-name">
            { product.title }
          </p>
        </h3>
        <h3>
          Preço:
          { product.price }
        </h3>
        <img src={ product.thumbnail } alt={ product.title } />
        <div>
          Especificações técnicas:
          {product.attributes.map((atributo, key) => (
            <div key={ key }>
              <p>{ `${atributo.name}: ${atributo.value_name}` }</p>
            </div>
          ))}
        </div>
        <button
          data-testid="product-detail-add-to-cart"
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

ProductDetail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};
