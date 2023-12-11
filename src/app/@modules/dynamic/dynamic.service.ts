import { Injectable ,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,} from '@angular/core';
import { DynamicNgComponentComponent } from './@components/dynamic-ng-component/dynamic-ng-component.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  dialogComponentRef: ComponentRef<DynamicNgComponentComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicNgComponentComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  
    this.dialogComponentRef = componentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public open(componentType: Type<any>) {
    this.appendDialogComponentToBody();
    this.dialogComponentRef.instance.childComponentType = componentType;
}
}
