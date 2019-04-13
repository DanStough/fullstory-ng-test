import { Component } from '@angular/core';

declare var FS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstory-ng-test';

  constructor() {
    FS.shutdown();
    // window['_fs_ready'] = function() {
    //   let sessionUrl = FS.getCurrentSessionURL();
    //   console.log("My session URL is: " + sessionUrl);
    //  };
  }

}
