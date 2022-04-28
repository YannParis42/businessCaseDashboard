import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    // localStorage.setItem('truc','coucou');
    this._authService.login('tortuga4281@yahoo.fr', 'coucou')
  }

}
