import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/drinks/favorite`;

export const drinksFavoriteApi = createApi({
  reducerPath: 'drinksFavoriteApi',
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
  tagTypes: ['drinksFavorite'],
  endpoints: builder => ({
    getDrinkFavoriteAll: builder.query({
      query: () => ({ url: `/all` }),
      providesTags: ['drinksFavorite'],
    }),
    deleteDrinkFavorite: builder.mutation({
      query: id => ({ url: `/remove/${id}`, method: 'DELETE' }),
      invalidatesTags: ['drinksFavorite'],
    }),
  }),
});

export const {
  useGetDrinkFavoriteAllQuery,
  useDeleteDrinkFavoriteMutation,
} = drinksFavoriteApi;