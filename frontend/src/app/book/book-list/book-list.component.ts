// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.login('joe.doe@gmail.com', '12345678').subscribe(
      (loginData: any) => {
        console.log('Login successful', loginData);
        // Set the authentication token in the BookService
        // this.bookService.setAuthToken(loginData.token);
        console.log(this.bookService); // Ensure that the authToken is set
        this.getBooksAfterLogin();
      },
      error => console.error('Error logging in', error)
    );
  }

  getBooksAfterLogin(): void {
    this.bookService.getBooks().subscribe(
      (data: any[]) => {
        this.books = data;
        console.log('Books fetched successfully', data);
      },
      error => console.error('Error fetching books', error)
    );
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.books = this.books.filter(book => book.id !== bookId);
      },
      error => console.error('Error deleting book', error)
    );
  }
}
