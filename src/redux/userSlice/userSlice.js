import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, avatarURL: '', birthDate: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        state = { ...state, ...action.payload.value, isLoggedIn: true };
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    updateUser: {
      reducer(state, action) {
        state = {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
        };
        return state;
      },
    },
    resetUser: {
      reducer(state) {
        state = initialState;
        return state;
      },
    },
  },
});

export const { setUser, resetUser, updateUser } = userSlice.actions;

export const userReducer = userSlice.reducer;