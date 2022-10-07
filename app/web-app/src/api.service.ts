import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}
    public getGames(): Observable<object> {
        return this.http.get(`https://premium-episode-364113.ue.r.appspot.com/api/games`, {
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
        }>(`https://premium-episode-364113.ue.r.appspot.com/api/playtimesByPrice`, {
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
        }>(`https://premium-episode-364113.ue.r.appspot.com/api/genreGameCounts`, {
            headers: {
                Authorization: `Bearer 12345`,
            },
            responseType: 'json',
        });
    }
}
