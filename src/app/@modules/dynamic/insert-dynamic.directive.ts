import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInsertDynamic]'
})
export class InsertDynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
