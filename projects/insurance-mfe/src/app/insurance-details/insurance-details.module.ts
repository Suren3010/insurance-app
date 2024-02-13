import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceDetailsRoutingModule } from './insurance-details-routing.module';
import { InsuranceDetailsComponent } from './insurance-details.component';
import { FormsModule } from '@angular/forms';
import { InsuranceDetailsSvc } from 'projects/common-lib/src/lib/insurance-services/insurance-details-svc';

@NgModule({
  providers: [InsuranceDetailsSvc],
  declarations: [InsuranceDetailsComponent],
  imports: [CommonModule, FormsModule, InsuranceDetailsRoutingModule],
})
export class InsuranceDetailsModule {}
