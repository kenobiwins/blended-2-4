// https://63f0c8ce5b7cf4107e26c18b.mockapi.io/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63f0c8ce5b7cf4107e26c18b.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAllUsers',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/users');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete('/users/' + id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
