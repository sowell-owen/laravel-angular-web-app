// book.service.ts
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  // private authToken: string | null = null;

  constructor(private http: HttpClient) {
  }

  // setAuthToken(token: string): void {
  //   this.authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNDYzZC0yNjA3LTk4ODAtMTMzOC03ZC05MDIzLWQzYTAtMjZiZS0xNjIzLm5ncm9rLWZyZWUuYXBwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzA2MjI1NTk0LCJleHAiOjE3MDYyMjkxOTQsIm5iZiI6MTcwNjIyNTU5NCwianRpIjoiaUxhU0xUUmtNNTlCY3dNTCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.waXI0RjcLiJA4b0gnSVv6g653A7yzBo7FkmJHf7mdkM";
  // }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');  // Add this line to set the Accept header
    return headers;
  }


  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`, {headers: this.getHeaders()})
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching books', error);
          console.log('Response body:', error.error); // Log the response body for further inspection
          throw error;
        })
      );
  }


  addBook(book: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books`, book, {headers: this.getHeaders()});
  }

  updateBook(bookId: number, book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/books/${bookId}`, book, {headers: this.getHeaders()});
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${bookId}`, {headers: this.getHeaders()});
  }

  getBookById(bookId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${bookId}`, {headers: this.getHeaders()});
  }

  login(email: string, password: string): Observable<any> {
    const credentials = {email, password};
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
