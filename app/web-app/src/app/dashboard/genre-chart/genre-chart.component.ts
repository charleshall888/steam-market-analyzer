import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
    selector: 'app-genre-chart',
    templateUrl: './genre-chart.component.html',
    styleUrls: ['./genre-chart.component.scss'],
})
export class GenreChartComponent implements OnInit {
    constructor(private apiService: ApiService) {}
    public genreGameCounts: any;

    ngOnInit(): void {
        this.apiService.getGenreCounts().subscribe((data) => {
            this.genreGameCounts = {
                labels: [
                    'Action',
                    'Adventure',
                    'Strategy',
                    'RPG',
                    'Casual',
                    'Simulation',
                ],
                datasets: [
                    {
                        label: 'Games by Genre',
                        backgroundColor: '#42A5F5',
                        data: data.genreCounts,
                    },
                ],
            };
        });
    }
}
