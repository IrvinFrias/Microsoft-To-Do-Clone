import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantTableComponent } from './important-table.component';

describe('ImportantTableComponent', () => {
  let component: ImportantTableComponent;
  let fixture: ComponentFixture<ImportantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
