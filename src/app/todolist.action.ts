import { createAction, props } from "@ngrx/store";

export const addTodo = createAction("[Todolist Component] AddTodo", props<any>())