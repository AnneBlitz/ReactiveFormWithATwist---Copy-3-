import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, ControlContainer, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName  }
  ]
})
export class ChildComponent implements OnInit {

  myInput = 'input2';
  formGroup = 'myNestedGroup';

  constructor() { }

  ngOnInit() {
  }

}
