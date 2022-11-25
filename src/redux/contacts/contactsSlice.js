import {
  contactsListApi,
  contactsDeleteApi,
  contactsPostApi,
} from 'redux/contacts/operations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [contactsListApi.pending]: handlePending,
    [contactsListApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [contactsListApi.rejected]: handleRejected,

    [contactsDeleteApi.pending]: handlePending,
    [contactsDeleteApi.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload);
      state.items.splice(index, 1);
    },
    [contactsDeleteApi.rejected]: handleRejected,

    [contactsPostApi.pending]: handlePending,
    [contactsPostApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [contactsPostApi.rejected]: handleRejected,
  },
});
export const contactsSliceReducer = contactsSlice.reducer;
