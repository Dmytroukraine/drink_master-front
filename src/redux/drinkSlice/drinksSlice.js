import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com/api/drinks/';
axios.defaults.baseURL = BASE_URL;

export const drinksApi = createApi({
  reducerPath: 'drinksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDE0NjcxOGRhNGFkMWQ0Y2I0ZmQ5MyIsImlhdCI6MTY5ODkxNTg0NCwiZXhwIjoxNjk4OTk4NjQ0fQ.WZDSZ2CMZ36U5VYLguFpxKreC4lGU0QUxNctE89Xr_0"
      const token = getState().user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['drinks'],
  endpoints: builder => ({
    getDrinkMainPage: builder.query({
      query: () => ({ url: `/mainpage` }),
      providesTags: ['drinks'],
    }),
    getDrinkById: builder.query({
      query: id => ({ url: `/${id}` }),
      keepUnusedDataFor: 1,
      providesTags: ['drinks'],
    }),
    getMyDrinks: builder.query({
      query: () => ({ url: `/own` }),
      providesTags: ['drinks'],
    }),
    getCategory: builder.query({
      query: categories => ({ url: `/search?category=${categories}` }),
      providesTags: ['drinks'],
    }),
    getIngredient: builder.query({
      query: ingredient => ({ url: `/search?ingredient=${ingredient}` }),
      providesTags: ['drinks'],
    }),
    deleteMyDrink: builder.mutation({
      query: id => ({
        url: `own/remove/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['drinks'],
    }),
  }),
});

export const {
  useGetDrinkMainPageQuery,
  useGetDrinkByIdQuery,
  useGetMyDrinksQuery,
  useGetCategoryQuery,
  useGetIngredientQuery,
  useDeleteMyDrinkMutation,
} = drinksApi;
