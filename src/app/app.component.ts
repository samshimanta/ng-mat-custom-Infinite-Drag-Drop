import { Component } from '@angular/core';
import { DynamicService } from './@modules/dynamic/dynamic.service';
import { TestDialogDataComponent } from './@modules/dynamic/@components/test-dialog-data/test-dialog-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory';

  // constructor(public dialog: DynamicService) {
  //   const ref = this.dialog.open(TestDialogDataComponent);

  //   // ref.afterClosed.subscribe(result => {
  //   //   console.log('Dialog closed', result);
  //   // });
  // }
}
