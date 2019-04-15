import { Component, AfterViewInit } from '@angular/core';

import { FullstoryServerService, FsSession } from '../../services/fullstory-server.service'
import { FullstoryClientService } from '../../services/fullstory-client.service';
import { GithubServerService } from '../../services/github-server.service';


@Component({
  selector: 'session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['created', 'sessionId', 'userId', 'fsUrl', 'issue'];
  data: FsSession[] = [];

  isLoadingResults = false;

  constructor(
    private fsClientSvc: FullstoryClientService,
    private fsServerSvc: FullstoryServerService,
    private ghServerSvc: GithubServerService) {
    fsServerSvc.$mySessions.subscribe( (data) => {
      this.data = data;
    });
  }

  ngAfterViewInit(){
    this.fsServerSvc.refresh();
  }

  createIssue(session: FsSession){
    console.log(session);
  }
}
