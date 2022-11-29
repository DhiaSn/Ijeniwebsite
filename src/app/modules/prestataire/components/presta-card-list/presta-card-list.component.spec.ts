import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaCardListComponent } from './presta-card-list.component';

describe('PrestaCardListComponent', () => {
  let component: PrestaCardListComponent;
  let fixture: ComponentFixture<PrestaCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestaCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestaCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
