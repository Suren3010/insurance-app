import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerDemoComponent } from './worker-demo/worker-demo.component';

const routes: Routes = [
  {path: '', component: WorkerDemoComponent},
  {path: 'insurance/:id', loadChildren: () => import('insurancemfe/insuranceMFEModule').then((m)=> m.InsuranceDetailsModule)},
  {path: 'payments/:id', loadChildren: () => import('premiummfe/premiummfeModule').then((m)=> m.PayPremiumModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
