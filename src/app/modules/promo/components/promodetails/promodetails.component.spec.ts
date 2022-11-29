import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodetailsComponent } from './promodetails.component';

describe('PromodetailsComponent', () => {
  let component: PromodetailsComponent;
  let fixture: ComponentFixture<PromodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromodetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
