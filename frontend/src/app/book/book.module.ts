import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    AddBookComponent,
    EditBookComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    BookRoutingModule
  ],
  providers: [
    BookService,
  ]
})
export class BookModule { }
