import { Component } from '@angular/core';
import { FullstoryClientService } from './services/fullstory-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstory-ng-test';

  constructor(
    private fsClientSvc: FullstoryClientService
  ) {
  }

  toggleRecord(){
    this.fsClientSvc.toggleRecording();
  }
}
