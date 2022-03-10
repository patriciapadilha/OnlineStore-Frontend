import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <input
          className="input-search"
          name="input-search"
          type="text"
          placeholder="Buscar..."
        />
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </>
    );
  }
}
