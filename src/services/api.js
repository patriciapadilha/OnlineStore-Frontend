/*
  Função pra realizar as chamadas de api genéricas.
  Parâmetros: URL principal da api, endpoint específica da api
*/

async function customFetch(ENDPOINT) {
  const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';
  return fetch(BASE_URL + ENDPOINT)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('Error: ', error));
}

export async function getCategories() {
  const CATEGORIES_ENDPOINT = '/categories';
  return customFetch(CATEGORIES_ENDPOINT);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const PRODUCTS_FROM_CATEGORIES_ENDPOINT = `/search?category=${categoryId}&q=${query}`;
  return customFetch(PRODUCTS_FROM_CATEGORIES_ENDPOINT);
}

export async function getProductsByQuery(query) {
  const PRODUCTS_FROM_QUERY_ENDPOINT = `/search?q=${query}`;
  return customFetch(PRODUCTS_FROM_QUERY_ENDPOINT);
}
