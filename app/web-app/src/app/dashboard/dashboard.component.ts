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
    public style: any = {
        width: '100%',
        height: '100%',
    };
    public columnDefs: ColDef[] = [
        { headerName: 'ID', field: 'appid', minWidth: 80, maxWidth: 80 },
        { field: 'name', width: 400 },
        {
            headerName: 'Release Date',
            field: 'release_date',
            width: 200,
        },
        { field: 'developer', width: 400 },
        {
            headerName: 'Median Playtime (Hrs)',
            field: 'median_playtime',

            width: 20,
            maxWidth: 200,
        },
        { field: 'owners', width: 200, maxWidth: 180 },
        { field: 'price', minWidth: 100, maxWidth: 100 },
        { headerName: 'categories', field: 'categories', width: 200 },
        { headerName: 'tags', field: 'steamspy_tags', width: 200 },
        {
            headerName: '+Reviews',
            field: 'positive_ratings',
            width: 50,
            maxWidth: 130,
        },
        {
            headerName: '-Reviews',
            field: 'negative_ratings',
            width: 50,
            maxWidth: 130,
        },
    ];

    public defaultColDef: ColDef = {
        flex: 1,
        sortable: true,
        filter: true,
        autoHeight: true,
        minWidth: 200,
        resizable: true,
    };

    public rowData: any;

    ngOnInit(): void {
        this.apiService.getGames().subscribe((data) => {
            this.rowData = data;
        });
    }
}
