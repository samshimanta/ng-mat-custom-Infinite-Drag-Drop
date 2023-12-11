import { Component ,Type, OnDestroy, AfterViewInit, ComponentRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core';
import { InsertDynamicDirective } from '../../insert-dynamic.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-ng-component',
  templateUrl: './dynamic-ng-component.component.html',
  styleUrls: ['./dynamic-ng-component.component.scss']
})
export class DynamicNgComponentComponent implements AfterViewInit, OnDestroy {
 
  private readonly _onClose = new Subject<any>()

  public componentRef: ComponentRef<any>
  public childComponentType: Type<any>
  public onClose = this._onClose.asObservable()

  @ViewChild(InsertDynamicDirective)
  insertionPoint: InsertDynamicDirective

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver ,
    private cd: ChangeDetectorRef,
    
    ) {}


  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }


  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }


}

