import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvistechDropAreaComponent } from './invistech-drop-area.component';

describe('InvistechDropAreaComponent', () => {
  let component: InvistechDropAreaComponent;
  let fixture: ComponentFixture<InvistechDropAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvistechDropAreaComponent]
    });
    fixture = TestBed.createComponent(InvistechDropAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
