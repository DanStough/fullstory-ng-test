import { Component } from '@angular/core';
import { FullstoryServerService, Session } from './services/fullstory-server.service'
import { FullstoryClientService } from './services/fullstory-client.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstory-ng-test';
  public sessions: Session[];

  constructor(
    private fsClientSvc: FullstoryClientService,
    private fsServerSvc: FullstoryServerService
  ) {
    
    fsServerSvc.getSessions().subscribe( (data: Session[]) => {
      this.sessions = data;
      console.log(this.sessions);
    });
  }

  toggleRecord(){
    this.fsClientSvc.toggleRecording();
  }

}
