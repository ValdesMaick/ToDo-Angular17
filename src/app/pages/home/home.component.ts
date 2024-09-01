import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NProduct } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input({ required: true }) productData!: NProduct.ProductData

  /* @Input() Decorador para las propiedades first, last, odd y even se pasaran como entradas input desde el componente padre "app-component.html, los valores se traen al componente"HomeComponent" para que puedan ser usados*/
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Input() odd!: boolean;
  @Input() even!: boolean;

  
}



/* getAvailabilityColor(disponibilidad: string): string {
    switch (disponibilidad) {
      case NProduct.disponibilidadText.HIGH:
        return '#3ee43e'; // Color para 'Disponible'
      case NProduct.disponibilidadText.MEDIUM:
        return '#eeee4f'; // Color para 'Ultima unidad'
      case NProduct.disponibilidadText.LOW:
        return '#ed4040'; // Color para 'Agotado'
      default:
        return '#d2c8c8'; // Color por defecto si no coincide
    }
  } */

    /* [ngStyle]="{
                    'background-color': getAvailabilityColor(productData.disponibilidad)
                }"> */