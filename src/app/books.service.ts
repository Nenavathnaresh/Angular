import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksApi:string = "http://localhost:3000/books"
  constructor(private http:HttpClient) { }
  getAllBooks(){
    return this.http.get(this.booksApi);
  }

  addNewBook(book:any){
    return this.http.post(this.booksApi, book)
  }

  deleteBook(id:any){
    return this.http.delete(`${this.booksApi}/${id}`)
  }

  updateBook(id:any, book:any){
    return this.http.put(`${this.booksApi}/${id}`, book)
  }
}
