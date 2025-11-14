import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header_menu: [],
  footer_main: [],
  footer_link_main: [],
};

const HomeSlice = createSlice({
  initialState,
  name: "HomeSlice",
  reducers: {},
});

export default HomeSlice;

export const {} = HomeSlice.actions;
