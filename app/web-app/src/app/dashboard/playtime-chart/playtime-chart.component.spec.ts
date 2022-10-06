import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytimeChartComponent } from './playtime-chart.component';

describe('PlaytimeChartComponent', () => {
  let component: PlaytimeChartComponent;
  let fixture: ComponentFixture<PlaytimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaytimeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaytimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
