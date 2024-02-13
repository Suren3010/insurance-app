import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPremiumComponent } from './pay-premium.component';

const routes: Routes = [{ path: '', component: PayPremiumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayPremiumRoutingModule { }
