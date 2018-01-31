import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ControlClienteComponent} from '../controlCliente/controlCliente.component';
import {NavbarComponent} from './navbar.component';
import {CategoriasESComponent} from '../categoriaES/categoriasES.component';
import {CategoriasPTComponent} from '../categoriasPT/categoriasPT.component';
import {LogisticaPTComponent} from '../logisticaPT/logisticaPT.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: NavbarComponent,
    children: [
      {
        path: 'control-cliente',
        component: ControlClienteComponent
      },
      {
        path: 'categorias-ES',
        component: CategoriasESComponent
      },
      {
        path: 'categorias-PT',
        component: CategoriasPTComponent
      },
      {
        path: 'logistica-ES',
        component: LogisticaPTComponent
      },
      {
        path: 'logistica-PT',
        component: LogisticaPTComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],


})


export class CuestionariosRoutingModule {
}
