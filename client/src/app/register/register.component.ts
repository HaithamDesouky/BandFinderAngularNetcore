import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  MaxLengthValidator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import {
  faGuitar,
  faDrum,
  faMicrophone,
  faKeyboard,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { Instrument } from '../_models/instrument';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];
  instruments: Instrument[] = [];
  faGuitar = faGuitar;
  faDrum = faDrum;
  faMicrophone = faMicrophone;
  faKeyboard = faKeyboard;
  faPlay = faPlay;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      instruments: [this.instruments],
      username: ['', Validators.required],
      bandName: [''],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      confirmPassword: [
        '',
        [Validators.required, this.matchValues('password')],
      ],
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  handleInstrumentsChange(instrument: Instrument) {
    let index = this.instruments.findIndex(
      (item) => item.name === instrument.name
    );
    if (index == -1) {
      this.instruments.push(instrument);
    } else {
      this.instruments.splice(index, 1);
    }
    console.log(this.instruments);
  }

  itemExists(name: string) {
    let index = this.instruments.some((item) => item.name === name);
    return index;
  }
  register() {
    console.log(this.registerForm.value);
    this.accountService.register(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigateByUrl('/members');
      },
      (error) => {
        this.validationErrors = error;
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
