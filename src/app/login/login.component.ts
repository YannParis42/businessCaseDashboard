import {
  HttpErrorResponse
} from '@angular/common/http';
import {
  calcPossibleSecurityContexts
} from '@angular/compiler/src/template_parser/binding_parser';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import {
  HttpClientServiceService
} from 'src/service/http-client-service.service';
import {
  UrlApi
} from 'src/service/url-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _email: string = '';
  private _password: string = '';
  error: string = '';

  formLogin: FormGroup = new FormGroup({
    email: new FormControl(this._email, [Validators.required, Validators.email]),
    password: new FormControl(this._password, [Validators.required, ])
  });

  getFormControl(key: string): AbstractControl {
    return this.formLogin.controls[key];
  }

  isFormControlInvalid(key: string) {
    const field: AbstractControl = this.getFormControl(key);
    return field.invalid && (field.touched || field.dirty);
  }

  constructor(
    private httpClientService: HttpClientServiceService,
    private router: Router,
  ) {};

  onSubmit(): void {
    if (this.formLogin.valid) {
      const jsonPostUser: {
        email: string,
        password: string
      } = {
        email: this.getFormControl('email').value,
        password: this.getFormControl('password').value
      };

      this.httpClientService.loginCheck(jsonPostUser).subscribe((response) => {
          if (response.token) {
            console.log(response.token);
            localStorage.setItem(UrlApi.keyTokenJWT, response.token);
            this.router.navigate(['/dashboard']).then();
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.error = 'Identifiants invalides';
            }
          }

        }
      );
    }

  }
}
