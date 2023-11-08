import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { resetUser, setUser, updateUser } from '../userSlice/userSlice';

// const BASE_URL = ${process.env.REACT_APP_BASE_URL}/api;
const BASE_URL = 'https://drink-master-service.onrender.com';

export const authApi = createApi({
  reducerPath: 'authApi',
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
  tagTypes: ['auth'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: ({ name, email, password, birthDate }) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { name, email, password, birthDate },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ['auth'],
    }),
    signin: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/signin',
        method: 'POST',
        body: { email, password },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
      invalidatesTags: ['auth'],
    }),
    currentUser: builder.query({
      query: () => ({
        url: '/users/current',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setUser((await queryFulfilled).data));
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/signout',
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          console.log('LOGOUT SUCCESS');
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(resetUser());
          localStorage.removeItem('persist:user');
        }
      },
      invalidatesTags: ['auth'],
    }),
    updateUser: builder.mutation({
      query: body => ({
        url: '/users/update',
        method: 'PATCH',
        body,
        formData: true,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateUser(data));
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: ['auth'],
    }),
    subscribe: builder.mutation({
      query: email => ({
        url: '/users/subscribe',
        method: 'POST',
        body: { email },
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useCurrentUserQuery,
  useLogoutMutation,
  useUpdateUserMutation,
  useSubscribeMutation,
} = authApi;
