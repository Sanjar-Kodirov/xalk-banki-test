import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from 'src/entities/Kanbanboard'
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})
