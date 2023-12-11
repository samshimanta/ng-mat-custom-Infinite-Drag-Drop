import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDragDrop
} from '@angular/cdk/drag-drop';
import { Item } from '../drag-drop/drag-drop.component';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent {
  @Input()
  item!: Item;
  @Input()
  connectedTo!: string[];
  @Output() itemDrop: EventEmitter<CdkDragDrop<Item>>;

  constructor() {
    this.itemDrop = new EventEmitter();
  }

  public onDragDrop(event): void {
    this.itemDrop.emit(event);
  }
}
