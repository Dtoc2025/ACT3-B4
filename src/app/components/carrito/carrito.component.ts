import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { SubtotalPipe } from '../../pipes/subtotal.pipe';
import { TotalCarritoPipe } from '../../pipes/total-carrito.pipe';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, SubtotalPipe, TotalCarritoPipe],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  private carritoService = inject(CarritoService);

  carrito$ = this.carritoService.carrito$;
  cantidadTotal$ = this.carritoService.cantidadTotal$;

  cambiar(id: number, cantidad: number): void {
    this.carritoService.cambiarCantidad(id, cantidad);
  }

  eliminar(id: number): void {
    this.carritoService.eliminarProducto(id);
  }

  vaciar(): void {
    this.carritoService.vaciarCarrito();
  }
}