// create a slice of state for the todos json data
import { createSlice } from '@reduxjs/toolkit';
import { getTodos } from '../services/getTodos.service';
const initialState = {
    completed: [],
    incomplete: [],
    todos: [],
    todo: {},
    isLoading: false,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        setCompleted(state, action) {
            console.log(action)
            state.completed = action.payload;
            console.log(action)
        },
        setIncomplete(state, action) {
            state.incomplete = action.payload;
        },
        removeItemByIdCompeted: (state, action) => {
            state.completed = state.completed.filter((item) => item.id != action.payload);
        },
        removeItemByIdInCompeted: (state, action) => {
            state.incomplete = state.incomplete.filter((item) => item.id != action.payload);
        },
        findItemById: (state, action) => {
            console.log(action.payload)
            state.todo = state.completed.find((item) => item.id == action.payload[0]);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.completed = action.payload.filter((task) => task.completed);
                state.incomplete = action.payload.filter((task) => !task.completed);
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.todos = [];
            });
    }
});

export const { actions: todosAction } = todosSlice;
export const { reducer: todosReducer } = todosSlice;


