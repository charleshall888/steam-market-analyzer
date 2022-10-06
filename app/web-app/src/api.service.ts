import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    public getGames(): Observable<object> {
        return this.http.get('http://127.0.0.1:4433/games', {
            headers: {
                Authorization: `Bearer 12345`,
            },
            responseType: 'json',
        });
    }

    public getPlaytimesByPrice(): Observable<{
        prices: string[];
        playtimes: number[];
    }> {
        return this.http.get<{
            prices: string[];
            playtimes: number[];
        }>('http://127.0.0.1:4433/playtimesByPrice', {
            headers: {
                Authorization: `Bearer 12345`,
            },
            responseType: 'json',
        });
    }

    public getGenreCounts(): Observable<{
        genreCounts: number[];
    }> {
        return this.http.get<{
            genreCounts: number[];
        }>('http://127.0.0.1:4433/genreGameCounts', {
            headers: {
                Authorization: `Bearer 12345`,
            },
            responseType: 'json',
        });
    }
}
