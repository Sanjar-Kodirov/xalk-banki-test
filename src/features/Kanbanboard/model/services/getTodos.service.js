// create a servicer to get the todos json data

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'src/shared/api/api';

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (thunkAPI) => {
        try {
            const response = await axios.get(API_URL);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    }
);
