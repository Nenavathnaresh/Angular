import { CanActivateFn } from '@angular/router';

export const productGuard: CanActivateFn = (route, state) => {
  if(window.localStorage.getItem('id')){
    return true
  }
  else{
    return false
  }
};
