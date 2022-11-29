import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaCardComponent } from './presta-card.component';

describe('PrestaCardComponent', () => {
  let component: PrestaCardComponent;
  let fixture: ComponentFixture<PrestaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
