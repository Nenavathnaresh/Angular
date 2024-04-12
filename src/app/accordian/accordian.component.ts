import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.css'
})
export class AccordianComponent {

  items = [
    { title: 'Item 1', content: 'Content for item 1' },
    { title: 'Item 2', content: 'Content for item 2' },
    { title: 'Item 3', content: 'Content for item 3' }
  ];  

  activeIndex: number | null = null;

  constructor(private loaderService:LoaderService){}

  ngOnInit(){
    this.loaderService.show()
  }

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null; // Collapse the active item if clicked again
    } else {
      this.activeIndex = index;
    }
  }

}
