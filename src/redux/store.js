import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contacts/contactsSlice";

import { UserLogin } from "./UserSlice/UserSlice";
import storage from 'redux-persist/lib/storage';
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
import { filterReducers } from "./filterSliceReducer";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(authPersistConfig, UserLogin)
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    tasks: contactsSliceReducer,
    filter: filterReducers,
  
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);