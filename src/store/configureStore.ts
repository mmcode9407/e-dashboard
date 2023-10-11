import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../data/user/slice';
import leadsReducer from '../data/leads/slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
   FLUSH,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
   REHYDRATE,
   persistReducer,
   persistStore,
   Persistor,
} from 'redux-persist';

const reducers = combineReducers({
   user: userReducer,
   leads: leadsReducer,
});

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor: Persistor = persistStore(store);
