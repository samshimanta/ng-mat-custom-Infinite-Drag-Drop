import { AfterContentInit, AfterViewInit, Component, DoCheck, Inject, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  copyArrayItem,
  CdkDragEnter,
} from '@angular/cdk/drag-drop';
export interface Item {
  name: string;
  uId: string;
  children: Item[];
}

export const DEMO_DATA: Item[] = [
  {
    uId: '0',
    name: 'Group 1',
    children: [
      {
        uId: '1',
        name: 'Group 1 - 1',
        children: [
          {
            uId: '2',
            name: 'Group 1 - 1 -1',
            children: []
          }
        ]
      }
    ]
  },
  {
    uId: '3',
    name: 'Group 2',
    children: []
  },
  {
    uId: '4',
    name: 'Group 3',
    children: []
  }
];

export const Demo2: Item[] = [
  {
    uId: '10',
    name: 'Group 1/1',
    children: [
      {
        uId: '11',
        name: 'Group 1/1 - 1',
        children: [
          {
            uId: '12',
            name: 'Group 1/1 - 1 -1',
            children: []
          }
        ]
      }
    ]
  },
  {
    uId: '13',
    name: 'Group 1/2',
    children: [
      {
        uId: '15',
        name: 'Group 15',
        children: [
          {
            uId: '16',
            name: 'Group 16',
            children: []
          }
        ]
      }
    ]
  },
  {
    uId: '14',
    name: 'Group 1/3',
    children: []
  }
];
export const ITEMS: Item[] = [
 
  {
    uId: '1',
    name: 'Item 1',
    children: []
  },
  {
    uId: '2',
    name: 'Item 2',
    children: []
  },
  {
    uId: '3',
    name: 'Item 3',
    children: []
  },
  {
    uId: '4',
    name: 'Item 4',
    children: []
  }
];



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit, DoCheck {

  uuid = 20
  public root: Item;
  public root_2:Item;

  connectedTo!:any
  inputData: string = '';
  
  // public get connectedTo(): string[] {
  //   return this.getIdsRecursive(this.root).reverse();
  // }

  constructor(
      //@Inject('') private cdk:CdkDragEnter
    ) {
    this.root = { uId: '-1', name: 'root', children: ITEMS } as Item;
    this.root_2 = { uId: '-2', name: 'root', children: Demo2 } as Item;
  }
  
  ngOnInit(): void {
   console.log('drag-initialized')
   this.dataArrIndex(this.root,this.root_2)
  // console.log(this.cdk)

   console.log(this.connectedTo)
  }

  ngDoCheck(){
    console.log("Hi there")
    this.dataArrIndex(this.root,this.root_2)
    console.log(this.connectedTo)
  }

  onDragDrop = (event) => {

   console.log(event.previousContainer )
   console.log(event.container)
    if (event.previousContainer.data === event.container.data) {
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
      // copyArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // )
    }
  };

  private getIdsRecursive(item: Item): string[] {
    
    let ids = [item.uId];
    item.children.forEach(childItem => {
      ids = ids.concat(this.getIdsRecursive(childItem));
    });
    return ids;
  }



  dataArrIndex(item:any , item2 :any){
    let a =  this.getIdsRecursive(item).reverse();
    let b =  this.getIdsRecursive(item2).reverse();
    this.connectedTo = a.concat(b)
  }

  addItem($event){
    console.log(this.inputData)
  }

  testcdkDropListEntered($event){
    console.log($event)
    let index = $event.currentIndex
    console.log($event.item.dropContainer.data)
    let itemData = $event.item.dropContainer.data["0"]
    this.uuid +=1
    itemData.uId = this.uuid.toString()
    this.connectedTo.push(itemData.uId)
    //ITEMS[$event.currentIndex].children.push(itemData)
    console.log(itemData)
    
    //this.dataArrIndex(this.root,this.root_2)
    console.log($event.currentIndex)
    console.log(ITEMS)
    //console.log(this.connectedTo)
  }
}


