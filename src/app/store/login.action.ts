import { createAction, props } from "@ngrx/store";


export const startLogin = createAction("[Login Component] Start Login", props<any>())
export const loginSuccess = createAction("[Login Component] Login Success", props<any>())