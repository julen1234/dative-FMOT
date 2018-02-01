import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {CuestionariosRoutingModule} from './navbar/cuestionarios-routing.module';
import {FormsModule} from '@angular/forms';

import {TranslateService} from './translate/translate.service';
import {LoginService} from '../services/login.service';
import {TranslatePipe} from './translate/translate.pipe';
import {TRANSLATION_PROVIDERS} from './translate/translations';
import {LoginComponent} from './login/login.component';
import {ControlClienteComponent} from './controlCliente/controlCliente.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CategoriasPTComponent} from './categoriasPT/categoriasPT.component';
import {CategoriasESComponent} from './categoriaES/categoriasES.component';
import {LogisticaESComponent} from './logisticaES/logisticaES.component';
import {LogisticaPTComponent} from './logisticaPT/logisticaPT.component';
import {ShopperPsycologhyComponent} from './shopperPsycologhy/shopperPsycologhy.component';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TranslatePipe,
    LoginComponent,
    ControlClienteComponent,
    NavbarComponent,
    CategoriasPTComponent,
    CategoriasESComponent,
    LogisticaESComponent,
    LogisticaPTComponent,
    ShopperPsycologhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CuestionariosRoutingModule
  ],
  providers: [TranslateService, TRANSLATION_PROVIDERS, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
