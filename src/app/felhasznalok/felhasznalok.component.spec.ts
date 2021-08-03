import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelhasznalokComponent } from './felhasznalok.component';

describe('FelhasznalokComponent', () => {
  let component: FelhasznalokComponent;
  let fixture: ComponentFixture<FelhasznalokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelhasznalokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FelhasznalokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
