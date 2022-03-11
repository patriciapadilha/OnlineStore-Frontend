import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default class HomePage extends Component {
  render() {
    const { imgsrc } = this.props;

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
        <Button imgsrc={ imgsrc } />
      </>
    );
  }
}

HomePage.propTypes = { imgsrc: PropTypes.string.isRequired };
