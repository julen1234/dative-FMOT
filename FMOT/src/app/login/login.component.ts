import {Component, OnInit} from '@angular/core';
import {TranslateService} from '../translate/translate.service';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';

import {isUndefined} from 'util';

export interface User {
  userName: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  private formRegister: User;
  private show: boolean;

  constructor(private translate: TranslateService, private router: Router, private login: LoginService) {
    translate.setDefaultLang('es');
    translate.use('es');
    this.show = false;
  }

  onSubmit(datos?: User): void {

    this.formRegister.userName = datos.userName;
    this.formRegister.password = datos.password;

    if ( this.login.compare(this.formRegister) === true ) {
      this.show = false;
      this.router.navigate(['/dashboard/control-cliente']);
    } else {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
      this.router.navigate(['/']);
    }


  }

  ngOnInit() {
    this.formRegister = {
      userName: '',
      password: '',
    };
    this.show = false;
  }



}
