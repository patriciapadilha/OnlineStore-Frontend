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
      productsCard: undefined,
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
    });
  }

  render() {
    const { inputSearch, productsCard } = this.state;
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
        {
          !productsCard
          ? (
            <h2 data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>
          )
          : productsCard.length > 0
          ? (
            productsCard.map(({title, thumbnail, price}, key) => (
              <Card
                key={ key }
                title={ title }
                thumbSrc={ thumbnail }
                price={ price }
              />
            ))
          )
          :
          (
            <p>Nenhum produto foi encontrado</p>
          )
        }
      </div>
    );
  }
}
