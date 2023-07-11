import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFamiliesComponent } from './dashboard-families.component';

describe('DashboardFamiliesComponent', () => {
  let component: DashboardFamiliesComponent;
  let fixture: ComponentFixture<DashboardFamiliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFamiliesComponent]
    });
    fixture = TestBed.createComponent(DashboardFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
