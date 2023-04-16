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
    },
);

// post todo

export const postTodo = createAsyncThunk(
    'todos/postTodo',
    async (todo, thunkAPI) => {
        try {
            const response = await axios.post(API_URL, { ...todo, completed: false });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    }
);

// delete todo

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    }
);

// update todo

export const updateTodo = createAsyncThunk(
    'todos/updateTodo',
    async (todo, thunkAPI) => {
        try {
            const response = await axios.put(`${API_URL}/${todo.id}`, todo);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    }
);