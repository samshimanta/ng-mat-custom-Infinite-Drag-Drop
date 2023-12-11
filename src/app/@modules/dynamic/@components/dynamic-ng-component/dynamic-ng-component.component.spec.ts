import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNgComponentComponent } from './dynamic-ng-component.component';

describe('DynamicNgComponentComponent', () => {
  let component: DynamicNgComponentComponent;
  let fixture: ComponentFixture<DynamicNgComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicNgComponentComponent]
    });
    fixture = TestBed.createComponent(DynamicNgComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
