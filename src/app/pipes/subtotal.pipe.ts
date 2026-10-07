import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtotal',
  standalone: true
})
export class SubtotalPipe implements PipeTransform {
  /** Uso: {{ precio | subtotal: cantidad }} */
  transform(precio: number, cantidad: number): number {
    if (precio == null || cantidad == null) return 0;
    return precio * cantidad;
  }
}