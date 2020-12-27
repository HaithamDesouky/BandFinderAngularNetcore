import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  loginForm: FormGroup;
  validationErrors: string[] = [];

  constructor(
    public accountService: AccountService,
    private toaster: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  login() {
    this.accountService.login(this.loginForm.value).subscribe(
      (response) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        this.toaster.error(error);
      }
    );
  }
}
