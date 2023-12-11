import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDialogDataComponent } from './test-dialog-data.component';

describe('TestDialogDataComponent', () => {
  let component: TestDialogDataComponent;
  let fixture: ComponentFixture<TestDialogDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDialogDataComponent]
    });
    fixture = TestBed.createComponent(TestDialogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
