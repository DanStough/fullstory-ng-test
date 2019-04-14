import { Component } from '@angular/core';
import { FullstoryServerService, Session } from './services/fullstory-server.service'

declare var FS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstory-ng-test';
  public sessions: Session[];

  constructor(
    private fullStoryService: FullstoryServerService
  ) {
    FS.shutdown();

    window['_fs_ready'] = function() {
      FS.identify('123456', {
        displayName: 'D. K. Stough (Test)',
        email: 'dan@example.com'
       })

      // let sessionUrl = FS.getCurrentSessionURL();
      // console.log("My session URL is: " + sessionUrl);
     };

    fullStoryService.getSessions().subscribe( (data: Session[]) => {
      this.sessions = data;
      console.log(this.sessions);
    });
  }

}
