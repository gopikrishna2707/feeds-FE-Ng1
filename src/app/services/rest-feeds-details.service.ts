import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class RestFeedsDetailsService {

  private baseUrl = 'http://localhost:8088';

  constructor(private http: HttpClient) {}

  getRestDetails(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/restAvailable`
    ).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
