import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMovesTableComponent } from './pokemon-moves-table.component';

describe('PokemonMovesTableComponent', () => {
  let component: PokemonMovesTableComponent;
  let fixture: ComponentFixture<PokemonMovesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonMovesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
