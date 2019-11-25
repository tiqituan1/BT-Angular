import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThuongtetComponent } from './form-thuongtet.component';

describe('FormThuongtetComponent', () => {
  let component: FormThuongtetComponent;
  let fixture: ComponentFixture<FormThuongtetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormThuongtetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThuongtetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
