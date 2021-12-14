import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPassForm: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
      this.forgotPassForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      }, {});
  }

// convenience getter for easy access to form fields
  get f() { return this.forgotPassForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgotPassForm.invalid) {
          return;
      }

      // display form values on success
      alert("sukses login")
  }

}
