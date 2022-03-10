import React, { Component } from 'react';
import '../css/Home.css';

// Cria O input para busca e o texto solicitado

export default class HomePage extends Component {
  render() {
    return (
      <>
        <div className="input-position">
          <input
            className="input-search"
            name="input-search"
            type="text"
            placeholder="Buscar..."
          />
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </>
    );
  }
}
