import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteCardComponent } from './sprite-card.component';

describe('SpriteCardComponent', () => {
  let component: SpriteCardComponent;
  let fixture: ComponentFixture<SpriteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpriteCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
