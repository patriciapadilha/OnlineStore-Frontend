import React, { Component } from 'react';
import '../css/Home.css';
import PropTypes from 'prop-types';
import SearchByInput from './SearchByInput';
import SearchByCategory from './SearchByCategory';

// Cria O input para busca e o texto solicitado
export default class Search extends Component {
  render() {
    const {
      productsCardCategory,
      inputSearch,
      handleChange,
      productsCardInput,
      fetchGetProductsByQuery,
    } = this.props;
    return (
      <div className="container-search">
        <form onSubmit={ (event) => event.preventDefault() }>
          <input
            data-testid="query-input"
            className="input-search"
            name="inputSearch"
            type="text"
            placeholder="Buscar..."
            value={ inputSearch }
            onChange={ handleChange }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ fetchGetProductsByQuery }
          >
            Pesquisar
          </button>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </form>
        <SearchByInput
          productsCardInput={ productsCardInput }
        />
        <SearchByCategory
          productsCardCategory={ productsCardCategory }
        />
      </div>
    );
  }
}

Search.propTypes = {
  productsCardCategory: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  })).isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  productsCardInput: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  })).isRequired,
  fetchGetProductsByQuery: PropTypes.func.isRequired,
};
