import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../services/login.service";
import { loginSuccess, startLogin } from "./login.action";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

@Injectable()
export class loginEffect {
    constructor(public actions$: Actions, public ls: LoginService) { }

    userlogin = createEffect(() =>
        this.actions$.pipe(
            ofType(startLogin),
            exhaustMap((action)=>{
                return this.ls.userLogin(action.userData).pipe(
                    map((data)=>{
                        return loginSuccess({users:data})
                    }),
                    catchError(()=>EMPTY)
                )
            })
        )
    )

   
}