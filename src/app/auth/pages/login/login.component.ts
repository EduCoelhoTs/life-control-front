import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import GeneralForm from '../../../core/GeneralForm';
import { FormItem } from '../../../core/models/formModel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends GeneralForm {

  private formTemplate: FormItem[] = [
    { formControlName: 'email', data: '', validator: [Validators.email] },
    { formControlName: 'password', data: '', validator: [Validators.required] }
  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.initForm(this.formTemplate);

    console.log(this.form);
  }
}
