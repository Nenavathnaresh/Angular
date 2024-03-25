import { createReducer, on } from "@ngrx/store"
import { addTodo } from "./todolist.action"

export const initialState = ["playing games","going to movie", "Practice coding"]

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, payload) =>{
        console.log(payload);
        
        return [...state, payload.newtodoitem]
    })
)