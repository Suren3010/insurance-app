import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayPremiumRoutingModule } from './pay-premium-routing.module';
import { PayPremiumComponent } from './pay-premium.component';
import { InsuranceDetailsSvc } from 'projects/common-lib/src/lib/insurance-services/insurance-details-svc';


@NgModule({
  declarations: [
    PayPremiumComponent
  ],
  providers:[
    InsuranceDetailsSvc
  ],
  imports: [
    CommonModule,
    PayPremiumRoutingModule
  ],
  exports: [
    PayPremiumComponent
  ]
})
export class PayPremiumModule { }
