import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
  salary:any = 26474833.36418638
  dob:any = '10-13-2001';
  students:any[] = ["Naresh","suresh","Divay","Puppy"];

}
