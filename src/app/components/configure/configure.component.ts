import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FullstoryClientService, Identity } from '../../services/fullstory-client.service'

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {
  fsIdentityForm = this.fb.group({
    uid: ['', Validators.required],
    displayName: [''],
    email: ['']
  });

  constructor(
    private fb: FormBuilder,
    private fsClientSvc: FullstoryClientService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.fsClientSvc.identify(this.fsIdentityForm.value);
  }

  onClear() {
    this.fsIdentityForm.reset();
  }

  onAnonymize() {
    this.fsClientSvc.clearIdentity();
    this.fsIdentityForm.reset();
  }

}
