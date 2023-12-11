import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cell-wrapper',
  templateUrl: './cell-wrapper.component.html',
  styleUrls: ['./cell-wrapper.component.scss']
})
export class CellWrapperComponent {
  @Input() cardTitle: string = "Card Title"

}
