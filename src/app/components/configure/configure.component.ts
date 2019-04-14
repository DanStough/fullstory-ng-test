import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.fsIdentityForm.value);
  }

  onClear() {
    this.fsIdentityForm.reset();
  }

}
