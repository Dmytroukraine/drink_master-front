import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api`;
const BASE_URL = 'https://drink-master-service.onrender.com/api/filters';

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
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
  tagTypes: ['filters'],
  endpoints: builder => ({
    getCategoriesList: builder.query({
      query: () => ({ url: '/category-list' }),
      providesTags: ['filters'],
    }),
    getMainPageRecipes: builder.query({
      query: () => ({ url: '/main-page' }),
      providesTags: ['filters'],
    }),
    searchRecipes: builder.query({
      query: searchParams => ({ url: `/${searchParams}` }),
      providesTags: ['filters'],
    }),
    getRecipeById: builder.query({
      query: id => ({ url: `/${id}` }),
      providesTags: ['filters'],
    }),
    toggleFavorite: builder.mutation({
      query: id => ({ url: `/favorites/${id}`, method: 'PATCH' }),
      invalidatesTags: ['filters'],
    }),
    getFavorites: builder.query({
      query: searchParams => ({ url: `/favorites/${searchParams}` }),
      providesTags: ['filters'],
    }),
    getPopularList: builder.query({
      query: () => ({ url: '/popular-recipes' }),
      providesTags: ['filters'],
    }),
    getIngredientsList: builder.query({
      query: () => ({ url: '/ingredients' }),
      providesTags: ['filters'],
    }),
    getGlassList: builder.query({
      query: () => ({ url: '/glass' }),
      providesTags: ['filters'],
    }),
  }),
});

export const {
  useGetCategoriesListQuery,
  useGetMainPageRecipesQuery,
  useSearchRecipesQuery,
  useGetRecipeByIdQuery,
  useGetIngredientsListQuery,
  useGetGlassListQuery,
  useToggleFavoriteMutation,
  useGetFavoritesQuery,
  useGetPopularListQuery,
} = filtersApi;