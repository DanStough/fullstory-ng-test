import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  playgroundForm = this.fb.group({
    name: [''],
    ccnumber: [''],
    email: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
