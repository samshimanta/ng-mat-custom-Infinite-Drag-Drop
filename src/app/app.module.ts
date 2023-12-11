import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDragComponent } from './mat-drag/mat-drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import { BoardNodeComponent } from './mat-drag/board-node/board-node.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CellComponent } from './cell/cell.component';
import { CellWrapperComponent } from './cell-wrapper/cell-wrapper.component';
import { DynamicModule } from './@modules/dynamic/dynamic.module';
import { InvistechDragComponent } from './invistech-drag/invistech-drag.component';
import { InvistechDropAreaComponent } from './invistech-drop-area/invistech-drop-area.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MatDragComponent,
    BoardNodeComponent,
    DragDropComponent,
    CellComponent,
    CellWrapperComponent,
    InvistechDragComponent,
    InvistechDropAreaComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatCardModule,
  
    //DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
