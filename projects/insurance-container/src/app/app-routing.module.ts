import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/insurance', pathMatch: 'full'},
  {path: 'insurance/:id', loadChildren: () => import('insurancemfe/insuranceMFEModule').then((m)=> m.InsuranceDetailsModule)},
  {path: 'insurance', loadChildren: () => import('insurancemfe/insuranceMFEModule').then((m)=> m.InsuranceDetailsModule)},
  {path: 'payments/:id', loadChildren: () => import('premiummfe/premiummfeModule').then((m)=> m.PayPremiumModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
