import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63f38350de3a0b242b438ab9.mockapi.io';

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

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.post('/users/', user);

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

export const getUser = createAsyncThunk(
  'user/getUser',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get('/users/' + id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.put('/users/' + user.id, user);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
