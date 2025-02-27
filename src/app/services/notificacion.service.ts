import { Injectable } from '@angular/core';
import { Notyf } from 'notyf';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  private notyf = new Notyf({
    duration: 3000, // Tiempo de duración en ms
    position: { x: 'right', y: 'bottom' }, // Posición
  });

  success(mensaje: string) {
    this.notyf.success(mensaje);
  }

  error(mensaje: string) {
    this.notyf.error(mensaje);
  }
}
