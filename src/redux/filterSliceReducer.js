import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    statusFilter(state, { payload }) {
      state.status = payload;
    },
  },
});

export const { statusFilter } = filterSlice.actions;
export const filterReducers = filterSlice.reducer;