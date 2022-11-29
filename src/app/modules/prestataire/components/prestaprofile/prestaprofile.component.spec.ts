import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaprofileComponent } from './prestaprofile.component';

describe('PrestaprofileComponent', () => {
  let component: PrestaprofileComponent;
  let fixture: ComponentFixture<PrestaprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestaprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
