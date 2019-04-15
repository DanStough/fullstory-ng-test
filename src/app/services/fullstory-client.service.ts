import { Injectable } from '@angular/core';

declare var FS: any;

export interface FsIdentity {
  uid: number | null,
  displayName?: string,
  email?: String
};

@Injectable({
  providedIn: 'root'
})
export class FullstoryClientService {
  public isRecording = false;
  public currentId : FsIdentity;

  constructor() { 
    FS.identify(false);
    FS.shutdown();

    this.currentId = {
      uid: null
    }
  }

  identify(identity: FsIdentity){
    this.currentId = identity;

    FS.identify(identity.uid, {
      displayName: identity.displayName,
      email: identity.email
     })
  }

  clearIdentity(){
    FS.identify(false);
    this.currentId = {
      uid: null
    }
  }

  toggleRecording() {
    this.isRecording ? FS.shutdown(): FS.restart();
    this.isRecording = !this.isRecording;
  }
}
