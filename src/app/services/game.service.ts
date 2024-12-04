import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createSession(name: string, maxPlayers: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/game/create-session`, { name, maxPlayers });
  }

  getSession(sessionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/game/session/${sessionId}`);
  }

  finalizeSession(sessionId: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/game/session/${sessionId}/finalize`, {});
  }

  listSessions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/game/sessions`);
  }
}
