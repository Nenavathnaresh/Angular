import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';

  items = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' }
  ]; 

  activeIndex:number | null = null;

  toggleAccordian(index:number){
    if(this.activeIndex == index){
      this.activeIndex = null
    }
    else{
      this.activeIndex = index
    }
  }
}
