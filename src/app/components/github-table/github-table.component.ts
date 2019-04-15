import { Component, AfterViewInit} from '@angular/core';

import { GithubServerService, GhIssue } from 'src/app/services/github-server.service';

@Component({
  selector: 'github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.css']
})
export class GithubTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['created', 'number', 'title', 'url'];
  data: GhIssue[] = [];

  isLoadingResults = false;

  constructor(
    private ghServerSvc: GithubServerService) {
      ghServerSvc.$ghIssues.subscribe( (data) => {
      this.data = data;
    });
  }

  ngAfterViewInit(){
    this.ghServerSvc.refresh();
  }
}

