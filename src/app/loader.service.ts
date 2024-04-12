import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading:boolean = false;

  constructor() { }

  show(): void {
    this.loading = true;
  }

  hide(): void {
    this.loading = false;
  }

  isLoading(): boolean {
    return this.loading;
  }
}
