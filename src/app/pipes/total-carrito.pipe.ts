import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'totalCarrito',
  standalone: true
})
export class TotalCarritoPipe implements PipeTransform {
  /** Uso: {{ carrito | totalCarrito }} */
  transform(productos: Producto[] | null): number {
    if (!productos || productos.length === 0) return 0;
    return productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }
}