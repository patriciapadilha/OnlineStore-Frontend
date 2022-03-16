import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Button from '../components/Button';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange({ target }) {
    const { value } = target;
    this.setState({ quantity: Number(value) });
  }

  render() {
    const { product, quantity } = this.state;
    const { title, price, thumbnail } = product;
    const { addItem } = this.props;
    return !product ? (
      <p>Carregando..</p>
    ) : (
      <div>
        <Button />
        <h3 data-testid="product-detail-name">
          <p data-testid="shopping-cart-product-name">
            { title }
          </p>
        </h3>
        <h3>
          Preço:
          { price }
        </h3>
        <img src={ thumbnail } alt={ title } />
        <div>
          Especificações técnicas:
          {product.attributes.map((attribute, key) => (
            <div key={ key }>
              <p>{ `${attribute.name}: ${attribute.value_name}` }</p>
            </div>
          ))}
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          name="addToCart"
          onClick={ () => addItem({
            title,
            price,
            thumbnail,
            quantity,
            available_quantity: product.available_quantity,
          }) }
        >
          Adicionar ao carrinho
        </button>
        <label htmlFor="quantity" datatestid="shopping-cart-product-quantity">
          Quantidade:
          <input
            type="number"
            name="quantity"
            className="quantity"
            value={ quantity }
            onChange={ this.handleChange }
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
  addItem: PropTypes.func.isRequired,
};
