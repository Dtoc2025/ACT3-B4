import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  // Fuente de verdad privada
  private carritoSubject = new BehaviorSubject<Producto[]>([]);

  // Observable público
  public carrito$: Observable<Producto[]> = this.carritoSubject.asObservable();

  // Derivados
  public cantidadTotal$: Observable<number> = this.carrito$.pipe(
    map(items => items.reduce((acc, p) => acc + p.cantidad, 0))
  );

  public total$: Observable<number> = this.carrito$.pipe(
    map(items => items.reduce((acc, p) => acc + p.precio * p.cantidad, 0))
  );

  private get snapshot(): Producto[] {
    return this.carritoSubject.value;
  }

  agregarProducto(producto: Omit<Producto, 'cantidad'>): void {
    const actual = [...this.snapshot];
    const existente = actual.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad += 1;
    } else {
      actual.push({ ...producto, cantidad: 1 });
    }
    this.carritoSubject.next(actual);
  }

  cambiarCantidad(id: number, cantidad: number): void {
    if (cantidad <= 0) {
      this.eliminarProducto(id);
      return;
    }
    const actual = this.snapshot.map(p =>
      p.id === id ? { ...p, cantidad } : p
    );
    this.carritoSubject.next(actual);
  }

  eliminarProducto(id: number): void {
    const actual = this.snapshot.filter(p => p.id !== id);
    this.carritoSubject.next(actual);
  }

  vaciarCarrito(): void {
    this.carritoSubject.next([]);
  }
}