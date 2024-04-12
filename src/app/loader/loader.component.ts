import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  loading: boolean = false;

  constructor(private loaderService:LoaderService) { }

  ngOnInit(): void {

  }

  isLoading(): boolean {
    return this.loaderService.isLoading();
  }

 
}
