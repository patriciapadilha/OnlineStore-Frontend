import React, { Component } from 'react';
import '../css/Home.css';
import Search from '../components/Search';
import CategoriesList from '../components/CategoriesList';

// Cria O input para busca e o texto solicitado

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <CategoriesList />
        <Search />
      </main>
    );
  }
}
