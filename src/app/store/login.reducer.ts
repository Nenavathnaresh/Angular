import { createReducer, on } from "@ngrx/store"
import { loginSuccess, startLogin } from "./login.action"


export const initialState = {
    userDet : [],
}

export const loginReducer = createReducer(
    initialState,
    on(loginSuccess, (state,action)=>{
        return {
            ...state,
            userDet:{...action.users}
        }
    })
)