import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaCardGridComponent } from './presta-card-grid.component';

describe('PrestaCardGridComponent', () => {
  let component: PrestaCardGridComponent;
  let fixture: ComponentFixture<PrestaCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestaCardGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestaCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
