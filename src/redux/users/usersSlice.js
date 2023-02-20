import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addUser,
  deleteUser,
  fetchUsers,
  getUser,
  updateUser,
} from './users.operations';

const initialState = {
  users: [],
  currentUser: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.isError = false;
};
const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.isError = payload;
  state.currentUser = null;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.currentUser = null;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.currentUser = null;
        state.users = state.users.filter(user => user.id !== payload.id);
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users = [...state.users, payload];
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.users = state.users.map(user => {
          if (user.id === payload.id) {
            console.log(payload);
            return payload;
          } else {
            return user;
          }
        });
        state.currentUser = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchUsers.pending,
          deleteUser.pending,
          getUser.pending,
          addUser.pending,
          updateUser.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.rejected,
          deleteUser.rejected,
          getUser.rejected,
          addUser.rejected,
          updateUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
          state.currentUser = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchUsers.fulfilled,
          deleteUser.fulfilled,
          getUser.fulfilled,
          addUser.fulfilled,
          updateUser.fulfilled
        ),
        state => {
          state.isError = false;
          state.isLoading = false;
        }
      ),
});

export const usersReducer = usersSlice.reducer;
