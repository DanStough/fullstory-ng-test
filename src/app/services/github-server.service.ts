import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { FsSession } from './fullstory-server.service'

const PROXY_PATH = "github";
const APP_LABEL = "fullstory-session";

export interface GhIssue {
  url: string,
  number: number,
  title: number,
  created_at: Date,
  body: string,
  html_url: string
}

export interface NewGhIssue {
  title: string,
  body?: string,
  labels?: string[]
};

@Injectable({
  providedIn: 'root'
})
export class GithubServerService {
  public loaded = false
  public currentUserId: number | null = null;
  public $ghIssues = new BehaviorSubject<GhIssue[]>([]);

  constructor(
    private http: HttpClient
  ) { 
    this.refresh();
  }

  public refresh() {
    this.loaded=false;

    this.getIssues().subscribe( (data)=> {
      this.$ghIssues.next(data);
      this.loaded=true;
    });
  }

  public createIssue(session: FsSession){
 
    this.http.post<GhIssue>(PROXY_PATH + "/repos/danstough/fullstory-ng-test/issues",
    { 
      title: "FullStory Issue: " + session.SessionId,
      body: "Created by " + session.UserId + " at URL: " + session.FsUrl,
      labels: [APP_LABEL]
    }).subscribe(() => {
      this.refresh();
    });
  }

  private getIssues(): Observable<GhIssue[]> {
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let params = new HttpParams().set('labels', "fullstory-session" );

    return this.http.get<GhIssue[]>(PROXY_PATH + "/repos/danstough/fullstory-ng-test/issues", {
      "headers": headers,
      "params": params
    })
  }
}
