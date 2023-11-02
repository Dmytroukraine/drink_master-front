import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authApi } from './authSlice';
import { filtersApi } from './filtersSlice';
import { userReducer } from './userSlice';
import { myRecipesApi } from './myRecipesSlice';
import { drinksFavoriteApi } from './drinkSlice';

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
  [drinksFavoriteApi.reducerPath]: drinksFavoriteApi.reducer,
  user: persistReducer(persistConfig, userReducer),
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
      .concat(drinksFavoriteApi.middleware),
});

export const persistor = persistStore(store);
