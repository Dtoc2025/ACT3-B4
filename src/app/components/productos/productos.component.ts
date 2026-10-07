import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  private carritoService = inject(CarritoService);

  productos: Omit<Producto, 'cantidad'>[] = [
    {
      id: 1,
      nombre: 'Laptop Pro 14"',
      precio: 9500,
      imagen: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80'
    },
    {
      id: 2,
      nombre: 'Mouse Inalámbrico',
      precio: 195,
      imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80'
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico',
      precio: 475,
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80'
    },
    {
      id: 4,
      nombre: 'Monitor 27" 4K',
      precio: 2350,
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80'
    },
    {
      id: 5,
      nombre: 'Audífonos Bluetooth',
      precio: 720,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80'
    },
    {
      id: 6,
      nombre: 'Cámara Web HD',
      precio: 380,
      imagen: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&q=80'
    }
  ];

  agregar(producto: Omit<Producto, 'cantidad'>): void {
    this.carritoService.agregarProducto(producto);
  }
}