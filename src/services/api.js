/*
  Função pra realizar as chamadas de api genéricas.
  Parâmetros: URL principal da api, endpoint específica da api
*/

function customFetch(ENDPOINT) {
  const BASE_URL = 'https://api.mercadolibre.com';
  return fetch(BASE_URL + ENDPOINT)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('Error: ', error));
}

export async function getCategories() {
  const CATEGORIES_ENDPOINT = '/sites/MLB/categories';
  return customFetch(CATEGORIES_ENDPOINT);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const PRODUCTS_FROM_CATEGORIES_ENDPOINT = (
    `/sites/MLB/search?category=${categoryId}&q=${query}`
  );
  return customFetch(PRODUCTS_FROM_CATEGORIES_ENDPOINT);
}

export async function getProductsByQuery(query) {
  const PRODUCTS_FROM_QUERY_ENDPOINT = `/sites/MLB/search?q=${query}`;
  return customFetch(PRODUCTS_FROM_QUERY_ENDPOINT);
}

export async function getProductsDetailsById(id) {
  const PRODUCTS_FROM_ID_ENDPOINT = `/items/${id}`;
  return customFetch(PRODUCTS_FROM_ID_ENDPOINT);
}
