import { configureStore } from "@reduxjs/toolkit";
import { catApiSlice } from "./catApi/carApiSlicer";
import counterReducer from"./counter/counterSlice";


export const store = configureStore({
  reducer: {
    [catApiSlice.reducerPath]: catApiSlice.reducer,
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApiSlice.middleware)
});