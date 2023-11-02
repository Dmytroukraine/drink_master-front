import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice/authSlice';
import { filtersApi } from './filtersSlice/filtersSlice';
import { userReducer } from './userSlice/userSlice';
import { myRecipesApi } from './drinkSlice/myRecipesSlice';
import { drinksFavoriteApi } from './drinkSlice/drinkFavoriteSlice';
import { drinksApi } from './drinkSlice/drinksSlice';
import { getRequestedDrink } from './searchOperations';
import { ingredientsSlice } from './ingredients/ingredientsSlice';
import { drinksPopularApi } from './getPopularOperation';


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [filtersApi.reducerPath]: filtersApi.reducer,
  [myRecipesApi.reducerPath]: myRecipesApi.reducer,
  [drinksApi.reducerPath]: drinksApi.reducer,
  [drinksFavoriteApi.reducerPath]: drinksFavoriteApi.reducer,
  [getRequestedDrink.reducerPath]: getRequestedDrink.reducer,
  [drinksPopularApi.reducerPath]: drinksPopularApi.reducer,

  user: persistReducer(persistConfig, userReducer),
  ingredients: ingredientsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(filtersApi.middleware)
      .concat(myRecipesApi.middleware)
      .concat(drinksFavoriteApi.middleware)
      .concat(drinksPopularApi.middleware)
      .concat(drinksApi.middleware)
      .concat(getRequestedDrink.middleware),
});

export const persistor = persistStore(store);
