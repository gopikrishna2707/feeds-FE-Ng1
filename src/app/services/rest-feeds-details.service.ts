import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class RestFeedsDetailsService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  getRestDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/restAvailable`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  sendLoginDetails(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error) => {
        console.log('error', error);
        return throwError(() => new Error('Error while posting the details'));
      })
    );
  }
}
