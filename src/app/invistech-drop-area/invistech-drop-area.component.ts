import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invistech-drop-area',
  templateUrl: './invistech-drop-area.component.html',
  styleUrls: ['./invistech-drop-area.component.scss']
})
export class InvistechDropAreaComponent {

  droppedData = []


  dropMethod(){
    console.log('dropped')
  }


  drop  (event) {
    console.log(event.previousContainer === event.container)
     if (event.previousContainer === event.container) {
       moveItemInArray(
         event.container.data,
         event.previousIndex,
         event.currentIndex
       );
     } 
     // else if(event.previousContainer !== event.container && ){
 
     // }
     else {
       transferArrayItem(
         event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex
       );
     }
   };
}
