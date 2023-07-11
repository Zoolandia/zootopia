import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdbComponent } from './testdb.component';

describe('TestdbComponent', () => {
  let component: TestdbComponent;
  let fixture: ComponentFixture<TestdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestdbComponent]
    });
    fixture = TestBed.createComponent(TestdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
