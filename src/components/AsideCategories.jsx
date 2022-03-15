import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AsideCategories extends Component {
  render() {
    const {
      categories,
      handleChange,
    } = this.props;

    /* Map percorre todas as categorias retornadas pela API e entrega uma UL com botões para seleção */
    const categoriesList = categories.map(({ id, name }, key) => (
      <li key={ key }>
        <label htmlFor={ id } data-testid="category">
          <input
            id={ id }
            type="radio"
            name="inputCategories"
            value={ id }
            onChange={ handleChange }
          />
          {name}
        </label>
      </li>));
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

AsideCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};
