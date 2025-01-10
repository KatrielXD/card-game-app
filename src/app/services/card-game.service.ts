import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardGameService {
  private apiUrl = 'https://card-game-backend-tj7j.onrender.com';

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cards`);
  }

  shuffleCards(): Observable<any> {
    return this.http.get(`${this.apiUrl}/shuffle`);
  }

  dealCards(count: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/deal/${count}`);
  }
}
