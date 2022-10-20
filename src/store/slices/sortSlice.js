import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "all",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {},
});

export default sortSlice.reducer;
