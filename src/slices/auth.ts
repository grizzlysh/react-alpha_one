import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setMessage } from './message';

import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem("user") || "{}");

const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, thunkAPI) => {
    
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));

      return response.data;
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      
    }
  }
)