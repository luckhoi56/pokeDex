import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsbarsComponent } from './statsbars.component';

describe('StatsbarsComponent', () => {
  let component: StatsbarsComponent;
  let fixture: ComponentFixture<StatsbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
