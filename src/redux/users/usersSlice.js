import { createSlice } from '@reduxjs/toolkit';
import { deleteUser, fetchUsers } from './users.operations';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
};
const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, handleReject)
      .addCase(deleteUser.pending, handlePending)
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isError = false;
        state.isLoading = false;
        // const index = state.users.findIndex(
        //   contact => contact.id === payload.id
        // );
        // state.users.splice(index, 1);
        state.users = state.users.filter(user => user.id !== payload.id);
      })
      .addCase(deleteUser.rejected, handleReject),
});

export const usersReducer = usersSlice.reducer;
