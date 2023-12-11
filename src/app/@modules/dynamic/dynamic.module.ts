import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicNgComponentComponent } from './@components/dynamic-ng-component/dynamic-ng-component.component';
import { InsertDynamicDirective } from './insert-dynamic.directive';
import { TestDialogDataComponent } from './@components/test-dialog-data/test-dialog-data.component';


@NgModule({
  declarations: [
    DynamicNgComponentComponent,
    InsertDynamicDirective,
    TestDialogDataComponent,
    
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  
  

})
export class DynamicModule { }
