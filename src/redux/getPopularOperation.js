import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/drinks/favorite`;



const BASE_URL = 'https://drink-master-service.onrender.com/api/drinks/'
axios.defaults.baseURL = BASE_URL;

export const drinksPopularApi = createApi({
  reducerPath: 'drinksPopularApi',
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
  tagTypes: ['drinksPopular'],
  endpoints: builder => ({
    getDrinksPopularAll: builder.query({
      query: () => ({ url: `/popular` }),
      providesTags: ['drinksPopular'],
    })
  }),
});

export const {
    useGetDrinksPopularAllQuery,
} = drinksPopularApi;