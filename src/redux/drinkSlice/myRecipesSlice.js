import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BASE_URL = 'https://drink-master-service.onrender.com/api/drinks/';
axios.defaults.baseURL = BASE_URL;

export const myRecipesApi = createApi({
  reducerPath: 'myRecipesApi',
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
  tagTypes: ['myRecipes'],
  endpoints: builder => ({
    createNewRecipe: builder.mutation({
      query: body => ({
        url: '/',
        method: 'POST',
        body,
        formData: true,
      }),
      invalidatesTags: ['myRecipes'],
    }),
    getMyRecipes: builder.query({
      query: () => ({ url: `/own` }),
      providesTags: ['myRecipes'],
    }),
    deleteMyRecipe: builder.mutation({
      query: id => ({ url: `/${id}`, method: 'DELETE' }),
      providesTags: ['myRecipes'],
    }),
  }),
});

export const {
  useCreateNewRecipeMutation,
  useGetMyRecipesQuery,
  useDeleteMyRecipeMutation,
} = myRecipesApi;
