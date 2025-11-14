import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./slices/home-slice";

const Store = configureStore({
  reducer: {
    home: HomeSlice.reducer,
  },
});

export default Store;



export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;