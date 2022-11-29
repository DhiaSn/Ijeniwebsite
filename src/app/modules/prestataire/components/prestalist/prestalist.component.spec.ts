import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestalistComponent } from './prestalist.component';

describe('PrestalistComponent', () => {
  let component: PrestalistComponent;
  let fixture: ComponentFixture<PrestalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
