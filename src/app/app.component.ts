import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { PRODUCT_DATA } from '../assets/products';
import { NProduct } from './models/product.model';
import { NavComponent } from './pages/nav/nav.component';

/* Para poder usar los componentes generados, es necesario llamarlos en el imports, al igual que importaremos los modulos necesarios para el desarrollo */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "KarenWeb";
  productData = PRODUCT_DATA

  constructor() {

  }

  /* NProduct.ProductData viene de product.model.ts, dentro del namespace llamado NProduct  esta el interface llamdo ProductData */
  getProductInfo(val: NProduct.ProductData) {
    console.log(val)
  }

  /* optimizar el rendimiento de las listas renderizadas en plantillas usando *ngFor. */
  trancByfn(_index: number, item: NProduct.ProductData) {
    return item.id_producto
  }

  

}
