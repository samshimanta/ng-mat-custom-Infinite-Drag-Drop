import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-node',
  templateUrl: './board-node.component.html',
  styleUrls: ['./board-node.component.scss']
})
export class BoardNodeComponent {
  @Input() todo!: any[];
  @Input() doneList!:  any[];
  @Input() todoListToCdkDropList!: any;

  @Output() drop = new EventEmitter()

}
