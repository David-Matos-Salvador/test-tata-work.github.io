import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loggeding } from '../store/actions/login.action';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  user: string = '';
  password: string = '';
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ login: boolean }>
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.pattern('test01')]],
      password: ['', [Validators.required, Validators.pattern('test01')]],
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  login = () => {
    if (this.loginForm.valid) {
      this.store.dispatch(loggeding());
      this.router.navigateByUrl('tasks');
    } else {
      this.loginForm.setErrors({ incorrecUser: true });
    }
  };
}
