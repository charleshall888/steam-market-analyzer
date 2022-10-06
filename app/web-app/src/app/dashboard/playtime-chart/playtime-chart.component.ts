import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';

@Component({
    selector: 'app-playtime-chart',
    templateUrl: './playtime-chart.component.html',
    styleUrls: ['./playtime-chart.component.scss'],
})
export class PlaytimeChartComponent implements OnInit {
    constructor(private apiService: ApiService) {}
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
    ngOnInit(): void {
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
        });
    }
}
