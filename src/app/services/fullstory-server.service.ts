import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { FullstoryClientService, FsIdentity } from './fullstory-client.service'

const PROXY_PATH = "fullstory"

export interface FsSession {
  UserId: number,
  SessionId: number,
  CreatedTime: number,
  FsUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class FullstoryServerService {
  public loaded = false
  public currentUserId: number | null = null;
  public $mySessions = new BehaviorSubject<FsSession[]>([]);

  constructor(
    private fsClientSvc: FullstoryClientService,
    private http: HttpClient
  ) { 
    this.refresh();
  }

  public refresh() {
    this.loaded=false;

    if(this.fsClientSvc.currentId.uid) {
      this.getSessions(this.fsClientSvc.currentId).subscribe( (data)=> {
        this.$mySessions.next(data);
        this.loaded=true;
      });
    } else {
      console.warn('Could not get User ID; User is anonymous. Please set in the Configuration Tab.')
      this.loaded=true;
    }
  }

  private getSessions(id: FsIdentity): Observable<FsSession[]> {
  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let params = new HttpParams().set('uid', String(id.uid) );

    return this.http.get<FsSession[]>(PROXY_PATH + "/api/v1/sessions", {
      "headers": headers,
      "params": params
    })
  }
}
