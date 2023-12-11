import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicNgComponentComponent } from './@components/dynamic-ng-component/dynamic-ng-component.component';

const routes: Routes = [
  {path:"" , component: DynamicNgComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
