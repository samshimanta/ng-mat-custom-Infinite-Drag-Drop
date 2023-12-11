import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvistechDragComponent } from './invistech-drag.component';

describe('InvistechDragComponent', () => {
  let component: InvistechDragComponent;
  let fixture: ComponentFixture<InvistechDragComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvistechDragComponent]
    });
    fixture = TestBed.createComponent(InvistechDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
