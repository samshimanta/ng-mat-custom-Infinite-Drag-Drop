import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mat-drag',
  templateUrl: './mat-drag.component.html',
  styleUrls: ['./mat-drag.component.scss']
})
export class MatDragComponent implements OnInit {

  collections: any[] = [
    'Start Fishing'
  ]

  

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  tree!: Array<Array<{
    _id: string,
    label: string,
    description: string
  }>>

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  ngOnInit(): void {
    // this.tree.map(
    //   (data: Array<{
    //     _id: string,
    //     label: string,
    //     description: string,
    //   }>) => {
    //     return data.map(d => ({
    //       id: "d._id"
    //     }));
    //   })
    //   console.table(this.tree)
  }

  debugDropEvent: any;

  eventNested: any[] = [];

  drop(event: CdkDragDrop<string[]>): void {
    this.debugDropEvent = event;
    if (event.previousContainer === event.container) {
      console.table(this.debugDropEvent)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.table(this.debugDropEvent)
      this.eventNested.push({id: event.container.id, event: event})
      console.debug(this.eventNested)
      this.eventNested.push(this.eventNested)
      console.debug(this.eventNested)


    } else {
      console.log(event.previousContainer.data)
      console.table(this.eventNested)
      console.debug(this.eventNested)

      this.makeProduct(event)
      console.debug(this.eventNested)

      console.debug(this.eventNested)

      this.eventNested.push({id: event.container.id, event: event})
      this.eventNested.push(this.eventNested)

      // transferArrayItem(event.previousContainer.data,
      //     event.container.data,
      //     event.previousIndex,
      //     event.currentIndex);
    }
  }

  makeProduct(event: any) {
    console.log(event.previousIndex)
    console.log(event.currentIndex)
    console.log(event.container)
   // event.container.data.push(...event.previousContainer.data)
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndexx
    )
  }

  testArray(item:any){
    return typeof(item) == 'object'
  }

  
}
