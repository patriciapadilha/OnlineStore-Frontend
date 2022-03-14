import React, { Component } from 'react';
import * as api from '../services/api';
import Card from './Card';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      isChecked: false,
      productsCard: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchGetProductsFromCategoryAndQuery = this
      .fetchGetProductsFromCategoryAndQuery.bind(this);
  }
  // Não permite que a inicialização da pagína ocorra sem a chamada da API

  componentDidMount() {
    api.getCategories().then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  handleChange(event) {
    this.setState((prevState) => ({
      isChecked: !prevState.isChecked }));
    const { target } = event;
    const { checked, id } = target;
    if (checked) {
      this.fetchGetProductsFromCategoryAndQuery(id);
    }
  }

  async fetchGetProductsFromCategoryAndQuery(_id) {
    const response = await api.getProductsFromCategoryAndQuery(_id, '');
    console.log(response);
    this.setState({
      productsCard: response,
    });
  }

  render() {
    const { categories, isChecked, productsCard } = this.state;
    /* Map percorre todas as categorias retornadas pela API e entrega uma UL com botões para seleção */
    const categoriesList = (
      categories
        .map(({ id, name }, key) => (
          <li key={ key }>
            <label htmlFor={ id } data-testid="category">
              <input
                id={ id }
                type="radio"
                name="inputCategories"
                value={ name }
                checked={ isChecked }
                onChange={ this.handleChange }
              />
              {name}
            </label>
          </li>))
    );
    const products = (
      productsCard.map(({ title, thumbnail, price }, key) => (
        <Card
          key={ key }
          title={ title }
          thumbSrc={ thumbnail }
          price={ price }
        />
      ))
    );

    return (
      <>
        <aside className="container-categories">
          <h3>Categorias</h3>
          <ul>
            { categoriesList }
          </ul>
        </aside>
        <div className="allProductsByCategory">
          { products }
        </div>
      </>

    );
  }
}
