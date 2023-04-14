// create a servicer to get the todos json data

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (thunkAPI) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    }
);
