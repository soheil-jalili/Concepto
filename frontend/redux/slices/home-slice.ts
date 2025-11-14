import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getHeaderLinks = createAsyncThunk("get-home-header", async () => {
  const response = await fetch("http://localhost:8000/api/home/");
  const data = await response.json();
  return data;
});

const initialState = {
  isLoading: false,
  error: "",
  header_menu: [],
  footer_link_main: [],
};

const HomeSlice = createSlice({
  initialState,
  name: "HomeSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeaderLinks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getHeaderLinks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.header_menu = action.payload.home.menus || [];
      state.footer_link_main = action.payload.footer_link_main || [];
    });
    builder.addCase(getHeaderLinks.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default HomeSlice;

export const {} = HomeSlice.actions;
