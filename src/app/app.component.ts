import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
  studentForm : FormGroup
  // addUrl='http://localhost:4500/addStudent'
  deleteUrl='http://localhost:4500/deleteStudent'

  constructor(private fb:FormBuilder, public http:HttpClient){
    this.studentForm = this.fb.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      course:["",Validators.required],
      batch:["",Validators.required],
      email:["",Validators.required],
      phone:["",Validators.required]
    })
  }

  ngOnInit(){
    this.deletestudent('6614ed8b465e051cb0c7cf26')
  }

  // save(){
  //   console.log(this.studentForm.value);
  //   this.http.post(this.addUrl,this.studentForm.value).subscribe((s)=>{
  //     console.log(s);
      
  //   })
  // }

  deletestudent(id:any){
    this.http.delete(`${this.deleteUrl}/${id}`).subscribe((res)=>
      console.log(res)
    )
  }
}
