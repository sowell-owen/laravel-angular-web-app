import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editedBook: Book = { title: '', author: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const bookIdString = this.route.snapshot.paramMap.get('id');

    if (bookIdString) {
      const bookId = parseInt(bookIdString, 10);

      if (!isNaN(bookId)) {
        this.bookService.getBookById(bookId).subscribe(
          (data: Book) => this.editedBook = data,
          (error: any) => console.error('Error fetching book', error)
        );
      } else {
        console.error('Invalid bookId provided');
      }
    } else {
      console.error('No bookId provided');
    }
  }

  updateBook(): void {
    const bookIdString = this.route.snapshot.paramMap.get('id');

    if (bookIdString) {
      const bookId = parseInt(bookIdString, 10); 

      if (!isNaN(bookId)) {
        this.bookService.updateBook(bookId, this.editedBook).subscribe(
          () => {
            this.router.navigate(['/books']);
          },
          (error: any) => console.error('Error updating book', error)
        );
      } else {
        console.error('Invalid bookId provided');
      }
    } else {
      console.error('No bookId provided');
    }
  }
}
