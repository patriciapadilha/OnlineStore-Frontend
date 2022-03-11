import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  // Não permite que a inicialização da pagína ocorra sem a chamada da API

  componentDidMount() {
    api.getCategories().then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  render() {
    const { categories } = this.state;
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
              />
              {name}
            </label>
          </li>))
    );
    return (
      <aside className="container-categories">
        <h3>Categorias</h3>
        <ul>
          { categoriesList }
        </ul>
      </aside>
    );
  }
}
