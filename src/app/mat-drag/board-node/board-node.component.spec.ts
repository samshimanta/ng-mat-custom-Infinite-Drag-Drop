import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNodeComponent } from './board-node.component';

describe('BoardNodeComponent', () => {
  let component: BoardNodeComponent;
  let fixture: ComponentFixture<BoardNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardNodeComponent]
    });
    fixture = TestBed.createComponent(BoardNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
