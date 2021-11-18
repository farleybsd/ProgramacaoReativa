import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.css']
})
export class FormgroupComponent {

  userprofileForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('')
  })

  onSubmit(){
    console.warn(this.userprofileForm.value)
    console.log(this.userprofileForm.controls['firstName'].value)
  }

}
