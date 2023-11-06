import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
const BASE_URL = 'https://drink-master-service.onrender.com/api/drinks/';
axios.defaults.baseURL = BASE_URL;

export const getRequestedDrink = createApi({
  reducerPath: 'drinksSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['drinksSearch'],
  endpoints: builder => ({
    drinkSearch: builder.query({
      query: keyword => ({
        url: `/search?query=${keyword}`,
        method: 'GET',
      }),
      categories: categories => ({
        url: `/search?categories=${categories}`,
        method: 'GET',
      }),
      ingredient: ingredient => ({
        url: `/search?ingredients=${ingredient}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useDrinkSearchQuery } = getRequestedDrink;
