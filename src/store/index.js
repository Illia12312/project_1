import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/useSlice";
import sortReducer from "./slices/sortSlice";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    sort: sortReducer,
  },
});
