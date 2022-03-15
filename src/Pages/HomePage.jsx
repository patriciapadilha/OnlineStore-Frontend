import React, { Component } from 'react';
import '../css/Home.css';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Search from '../components/Search';
import AsideCategories from '../components/AsideCategories';
import Button from '../components/Button';

// Cria O input para busca e o texto solicitado
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      inputSearch: '',
      productsCardInput: [],
      isChecked: false,
      productsCardCategory: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchGetProductsFromCategoryAndQuery = (
      this.fetchGetProductsFromCategoryAndQuery.bind(this)
    );
    this.fetchGetProductsByQuery = this.fetchGetProductsByQuery.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((response) => {
        this.setState({ categories: [...response] });
      })
      .catch((error) => console.log('Error: ', error));
  }

  handleChange({ target }) {
    const { value } = target;
    if (target.type === 'radio' && target.checked) {
      this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
      this.fetchGetProductsFromCategoryAndQuery(value);
    } else {
      this.setState({ inputSearch: value });
    }
  }

  async fetchGetProductsFromCategoryAndQuery(_id) {
    const response = await api.getProductsFromCategoryAndQuery(_id, '');
    const { results } = response;
    this.setState({
      productsCardCategory: [...results],
      productsCardInput: [],
    });
  }

  async fetchGetProductsByQuery() {
    const { inputSearch } = this.state;
    const response = await api.getProductsByQuery(inputSearch);
    const { results } = response;
    this.setState({
      productsCardInput: [...results],
      inputSearch: '',
      productsCardCategory: [],
    });
  }

  render() {
    const { imgsrc } = this.props;
    const {
      categories,
      isChecked,
      productsCardCategory,
      inputSearch,
      productsCardInput,
    } = this.state;
    return (
      <main>
        <AsideCategories
          isChecked={ isChecked }
          categories={ categories }
          handleChange={ this.handleChange }
        />
        <Search
          inputSearch={ inputSearch }
          productsCardInput={ productsCardInput }
          productsCardCategory={ productsCardCategory }
          handleChange={ this.handleChange }
          fetchGetProductsByQuery={ this.fetchGetProductsByQuery }
        />
        <Button imgsrc={ imgsrc } />
      </main>
    );
  }
}

HomePage.propTypes = { imgsrc: PropTypes.string.isRequired };
