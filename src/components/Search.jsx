import React, { Component } from 'react';
import '../css/Home.css';
import * as api from '../services/api';
import Card from './Card';

// Cria O input para busca e o texto solicitado

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      productsCard: [],
      didSearch: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.fetchGetProductsByQuery = this.fetchGetProductsByQuery.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async fetchGetProductsByQuery() {
    const { inputSearch } = this.state;
    const response = await api.getProductsByQuery(inputSearch);
    console.log(response);
    this.setState({
      productsCard: response,
      didSearch: true,
    });
  }

  render() {
    const { inputSearch, productsCard, didSearch } = this.state;
    return (
      <div className="container-search">
        <div>
          <input
            data-testid="query-input"
            className="input-search"
            name="inputSearch"
            type="text"
            placeholder="Buscar..."
            value={ inputSearch }
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.fetchGetProductsByQuery }
          >
            Pesquisar
          </button>
        </div>
        { !didSearch
          && (
            <h2 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>)}
        {
          didSearch && productsCard.length === 0
            ? (
              <p>Nenhum produto foi encontrado</p>
            )
            : (
              productsCard.map(({ title, thumbnail, price, id }, key) => (
                <Card
                  key={ key }
                  title={ title }
                  thumbSrc={ thumbnail }
                  price={ price }
                  id={ id }
                />
              ))
            )
        }
      </div>
    );
  }
}
