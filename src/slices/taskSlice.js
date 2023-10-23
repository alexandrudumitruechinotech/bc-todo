import {createSelector, createSlice} from "@reduxjs/toolkit";
import {filterTypes} from "../_shared/data.js";

const initialState = []

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },

        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload)
        },

        updateTask: (state, action) => {
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return action.payload
                }
                return task
            })
        }
    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions

export const selectFilteredTasks = createSelector(
    [(state) => state.tasks, (state, type) => type],
    (tasks, type) => tasks.filter(task => {
        if (type === filterTypes.COMPLETED) {
            return task.completed === true
        } else if (type === filterTypes.ACTIVE) {
            return task.completed === false
        }
        return true
    }))
export default taskSlice.reducer