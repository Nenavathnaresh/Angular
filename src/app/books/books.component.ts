import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { log } from 'console';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  books:any;
  bookTitle:any;
  bookView:any;
  currId:any;
  flag:boolean = false;
  
  constructor(private bookServices:BooksService){}
  
  ngOnInit(){
    this.fetchAllBook()
  }

  fetchAllBook(){
    this.bookServices.getAllBooks().subscribe((res)=>{
      this.books = res
    })
  }

  addbook(){
    let newBook = {
      "title":this.bookTitle,
      "views":this.bookView
    }
    this.bookServices.addNewBook(newBook).subscribe((res)=>{
      alert('book added successfully')
      this.fetchAllBook()
    })
  }

  delete(id:any){
    this.bookServices.deleteBook(id).subscribe((res)=>{
      // confirm('Do you want delete this book')
      this.fetchAllBook()
    })
  }

  edit(book:any){
    this.flag = true
    this.bookTitle = book.title
    this.bookView = book.views
    this.currId = book.id
  }

  update(){
    this.flag = false
    let updateBook = {
      
      "title":this.bookTitle,
      "views":this.bookView
    }
    this.bookServices.updateBook(this.currId, updateBook).subscribe((res)=>{
      this.fetchAllBook()
    })
  }
}
