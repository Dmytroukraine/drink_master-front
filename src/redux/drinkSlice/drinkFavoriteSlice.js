import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';


const BASE_URL = 'https://drink-master-service.onrender.com/api/drinks/'
axios.defaults.baseURL = BASE_URL;

export const drinksFavoriteApi = createApi({
  reducerPath: 'drinksFavoriteApi',
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
  tagTypes: ['drinksFavorite'],
  endpoints: builder => ({
    getDrinkFavoriteAll: builder.query({
      query: () => ({ url: `/favorite` }),
      providesTags: ['drinksFavorite'],
    }),
    deleteDrinkFavorite: builder.mutation({
      query: id => ({ url: `/favorite/remove/${id}`, method: 'DELETE' }),
      invalidatesTags: ['drinksFavorite'],
    }),
    addDrinkFavorite: builder.mutation({
      query: id => ({ url: `/favorite/add/${id}`, method: 'POST' }),
      invalidatesTags: ['drinksFavorite'],
    }),
  }),
});

export const {
  useGetDrinkFavoriteAllQuery,
  useDeleteDrinkFavoriteMutation,
  useAddDrinkFavoriteMutation,
} = drinksFavoriteApi;