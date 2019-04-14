import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const PROXY_PATH = "fullstory"

export interface Session {
  UserId: number,
  SessionId: number,
  CreatedTime: number,
  FsUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class FullstoryServerService {
  public sessions: Session[];
  public loaded = false

  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getSessions(): Observable<Session[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let params = new HttpParams().set('uid', '123456');

    return this.http.get<Session[]>(PROXY_PATH + "/api/v1/sessions", {
      "headers": headers,
      "params": params
    })
  }
}
