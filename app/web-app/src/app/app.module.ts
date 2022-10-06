import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from 'primeng/chart';
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        DashboardComponent,
    ],
    imports: [BrowserModule, ButtonModule, AgGridModule, HttpClientModule, ChartModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
