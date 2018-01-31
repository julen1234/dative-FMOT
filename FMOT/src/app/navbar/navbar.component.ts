import {Component, OnInit} from '@angular/core';
import {LoginService, User} from '../../services/login.service';
import {Router} from '@angular/router';


@Component ({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})

export class NavbarComponent implements OnInit{

  private usuario: User;

  constructor(private login: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.usuario = this.login.getUsuario();
  }

  onClick(): void {
    this.router.navigate(['/']);
  }
}
