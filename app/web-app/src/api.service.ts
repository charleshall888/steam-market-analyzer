import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    public getGames(token: string): Observable<object> {
        return this.http.get('http://127.0.0.1:4433/games', {
            headers: {
                Authorization: `Bearer ${token ? token : 'null'}`,
            },
            responseType: 'json',
        });
    }
}
