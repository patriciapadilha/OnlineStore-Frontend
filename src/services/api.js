/*
  Função pra realizar as chamadas de api genéricas.
  Parâmetros: URL principal da api, endpoint específica da api, callback para o tratamento dos dados
*/

function customFetch(ENDPOINT, dataCallback) {
  const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';
  return fetch(BASE_URL + ENDPOINT)
    .then((response) => response.json())
    .then(dataCallback)
    .catch((error) => console.log('Error: ', error));
}

//  Callback para o tratamento dos dados da getCategory
function categoriesCallBack(data) {
  return data;
}

export async function getCategories() {
  const CATEGORIES_ENDPOINT = '/categories';
  return customFetch(CATEGORIES_ENDPOINT, categoriesCallBack);
}

//  Callback para o tratamento dos dados da getProductsFromCategoryAndQuery
function productsFromCategoriesCallback(data) {
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const PRODUCTS_FROM_CATEGORIES_ENDPOINT = `/search?category=${categoryId}&q=${query}`;
  return customFetch(PRODUCTS_FROM_CATEGORIES_ENDPOINT, productsFromCategoriesCallback);
}

//  Callback para o tratamento dos dados da getProductsByQuery
function getProductsByQueryCallback(data) {
  return data;
}

export async function getProductsByQuery(query) {
  const PRODUCTS_FROM_QUERY_ENDPOINT = `/search?q=${query}`;
  return customFetch(PRODUCTS_FROM_QUERY_ENDPOINT, getProductsByQueryCallback);
}
