import React, { Component } from 'react';
import '../css/Home.css';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import CategoriesList from '../components/CategoriesList';
import Button from '../components/Button';

// Cria O input para busca e o texto solicitado
export default class HomePage extends Component {
  render() {
    const { imgsrc } = this.props;

    return (
      <main>
        <CategoriesList />
        <Search />
        <Button imgsrc={ imgsrc } />
      </main>
    );
  }
}

HomePage.propTypes = { imgsrc: PropTypes.string.isRequired };
