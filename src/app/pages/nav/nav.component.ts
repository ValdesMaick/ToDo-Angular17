import { Component } from '@angular/core';
import { PRODUCT_DATA } from '../../../assets/products';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  productData = PRODUCT_DATA
  /* Ordenar los productos de mayor a menor, sera usada en: app.component.html */
  orderProduct(){
    this.productData.sort((a, b) => a.valor - b.valor)
  }
  orderProduct2(){
    this.productData.sort((a,b) => b.valor - a.valor)
  }


}
