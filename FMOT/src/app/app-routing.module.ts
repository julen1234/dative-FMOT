import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app-login'},
  { path: 'app-login', component: LoginComponent },
  { path: 'dashboard', component: NavbarComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})


export class AppRoutingModule {
}

export const routingComponents = [ LoginComponent,  NavbarComponent ];
