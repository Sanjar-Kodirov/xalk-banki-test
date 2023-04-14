import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from 'src/features/Kanbanboard'
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})
