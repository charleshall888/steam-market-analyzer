import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ApiService } from 'src/api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private apiService: ApiService) {}

    public columnDefs: ColDef[] = [
        { headerName: 'ID', field: 'appid' },
        { field: 'name' },
        { headerName: 'Release Date', field: 'release_date' },
        { field: 'developer' },
        { headerName: 'Median Playtime', field: 'median_playtime' },
        { field: 'owners' },
        { field: 'price' },
        { field: 'steamspy_tags' },
    ];

    public genreGameCounts: any;
    public pricePlaytimeData: any;
    public basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
            },
            y: {
                ticks: { suggestedMax: 100, color: '#495057' },
                grid: {
                    color: '#ebedef',
                },
            },
        },
    };
    public defaultColDef: ColDef = {
        flex: 1,
        sortable: true,
        filter: true,
        autoHeight: true,
    };

    public rowData: any;

    ngOnInit(): void {
        this.apiService.getGames().subscribe((data) => {
            this.rowData = data;
        });
        this.apiService.getPlaytimesByPrice().subscribe((data) => {
            this.pricePlaytimeData = {
                labels: data.prices,
                datasets: [
                    {
                        label: 'Average Playtime (Hrs)',
                        data: data.playtimes,
                        fill: false,
                        borderColor: '#FFA726',
                        tension: 0.4,
                    },
                ],
            };
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
        });
    }
}
