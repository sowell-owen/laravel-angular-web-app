// add-book.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: any = { title: '', author: '' };

  constructor(private bookService: BookService, private router: Router) {}

  addBook(): void {
    this.bookService.addBook(this.newBook).subscribe(
      (addedBook: any) => {
        console.log('Book added successfully', addedBook);
        this.router.navigate(['/books']);
      },
      error => console.error('Error adding book', error)
    );
  }
}
