import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrimaryComponent } from './btn-custom.component';

describe('BtnPrimaryComponent', () => {
  let component: BtnPrimaryComponent;
  let fixture: ComponentFixture<BtnPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnPrimaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BtnPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
