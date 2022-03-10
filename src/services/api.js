const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';

/*
  Função pra realizar as chamadas de api genéricas.
  Parâmetros: URL principal da api, endpoint específica da api, callback para o tratamento dos dados
*/
function customFetch(BASE_URL, ENDPOINT, dataCallback) {
  return fetch(BASE_URL + ENDPOINT)
  .then((response) => response.json())
  .then(dataCallback)
  .catch((error) => console.log('Error: ', error));
}

// Callback para o tratamento dos dados da getCategory
function categoriesCallBack(data) {
  return data;
}

export async function getCategories() {
  const CATEGORIES_ENDPOINT = '/categories';
  return await customFetch(BASE_URL, CATEGORIES_ENDPOINT, categoriesCallBack);
}

//Callback para o tratamento dos dados da getProductsFromCategoryAndQuery
function productsFromCategoriesCallback(data) {
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const PRODUCTS_FROM_CATEGORIES_ENDPOINT = `/search?category=${categoryId}&q=${query}`;
  return await customFetch(BASE_URL, PRODUCTS_FROM_CATEGORIES_ENDPOINT, productsFromCategoriesCallback);
}