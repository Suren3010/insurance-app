import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPremiumComponent } from './pay-premium.component';

describe('PayPremiumComponent', () => {
  let component: PayPremiumComponent;
  let fixture: ComponentFixture<PayPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayPremiumComponent]
    });
    fixture = TestBed.createComponent(PayPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
