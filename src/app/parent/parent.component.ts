import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  initForm(formBuilder: FormBuilder): void {
    this.myForm = formBuilder.group({
      input1: ['', [Validators.required, Validators.minLength(3)]],
      childForm: this.formBuilder.group({
         input2: ['', Validators.required]
       })
    }
    );
  }
  ngOnInit() {
    this.initForm(this.formBuilder);
  }

}
