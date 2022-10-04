import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    public columnDefs: ColDef[] = [
        { field: 'appid' },
        { field: 'name' },
        { field: 'release_date' },
    ];

    public rowData = [
        { appid: '10', name: 'Counter-Strike', release_date: 11 / 1 / 2000 },
    ];

    ngOnInit(): void {}
}
