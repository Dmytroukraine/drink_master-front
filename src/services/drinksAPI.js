import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com';
axios.defaults.baseURL = BASE_URL;

export async function getDrinksMainPage() {
  const { data } = await axios.get(`/api/drinks/mainpage`);
  return data;
}

export async function getDrinksPopular() {
  const { data } = await axios.get(`/api/drinks/popular`);
  return data;
}

export async function getDrinksById(id) {
  const { data } = await axios.get(`/api/drinks/${id}`);
  return data;
}


// export async function getAllIngredients() {
//   const { data } = await axios.get(`/api/filters/ingredients`);
//   return data;
// }

// Example


// Example 

// const testId = '639b6de9ff77d221f190c50f';

// getDrinksById(testId)
//   .then(res => {
//     console.log('getDrinksById: ', res);
//     return;
//   })
//   .catch(error => {
//     return console.log(error);
//   })
//   .finally(() => console.log('Finally'));
