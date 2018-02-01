import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ControlClienteComponent} from '../controlCliente/controlCliente.component';
import {NavbarComponent} from './navbar.component';
import {CategoriasESComponent} from '../categoriaES/categoriasES.component';
import {CategoriasPTComponent} from '../categoriasPT/categoriasPT.component';
import {LogisticaPTComponent} from '../logisticaPT/logisticaPT.component';
import {ShopperPsycologhyComponent} from '../shopperPsycologhy/shopperPsycologhy.component';

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
      {
        path: 'shopperPsycologhy',
        component: ShopperPsycologhyComponent
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
