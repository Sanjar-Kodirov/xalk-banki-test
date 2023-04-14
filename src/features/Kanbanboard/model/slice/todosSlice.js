// create a slice of state for the todos json data
import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from '../services/getTodos.service';
const initialState = {
    todos: [],
    isLoading: false,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.todos = [];
            });
    }
});

export const { actions: todosAction } = todosSlice;
export const { reducer: todosReducer } = todosSlice;


