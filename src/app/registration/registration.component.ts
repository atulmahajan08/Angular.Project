import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {
    title = 'Reactive forms';
  
    angForm: FormGroup;
    constructor(private fb: FormBuilder)
    {
      this.createForm();
    }
    createForm(){
      this.angForm= this.fb.group({
        name: ["", [Validators.required, Validators.maxLength(20), Validators.minLength(6), ]],
        // address: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]], 
        gender: ["", Validators.required],
        Designation: ["", Validators.required],
        Remarks: ["", Validators.required,]       
      });
    }
    value: any;
  
    submit(angForm){
      this.value=angForm;
      }
  }

