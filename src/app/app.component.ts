import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
  firstname:any = 'Naresh'
  gender:any;
  selectedTech:any[]=[];
  technologies:any[] = ['python','angular','react','html','css']
  femaleImg:any = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRt03ZDzrVA93OrtiL5b818YcwLzNHlN1vug&usqp=CAU"
  maleImg:any = 'https://storage.needpix.com/rsynced_images/symbol-of-male.jpg'

  selTech(e:any){
    console.log(e.target.value)
    if(e.target.checked){
      this.selectedTech.push(e.target.value)
    }
    else{
      this.selectedTech = this.selectedTech.filter((tech:any)=>{
        if(tech === e.target.value){
          return false
        }
        else{
          return true
        }
      })
    }
  }
}
