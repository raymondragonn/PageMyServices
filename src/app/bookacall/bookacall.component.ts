import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { HttpClient } from '@angular/common/http';
import { NotificacionService } from '../services/notificacion.service';

@Component({
  selector: 'app-bookacall',
  templateUrl: './bookacall.component.html',
  styleUrls: ['./bookacall.component.scss']
})
export class BookacallComponent {
  formEmail: FormGroup;
  EnviarCorreo: boolean = false;

  constructor(private fb: FormBuilder, private serviceMail: EmailService, private notificacion: NotificacionService) {
    this.formEmail = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      findus: ['', [Validators.required]],
      actualWeb: ['', []],   // Campo opcional
      budget: ['', [Validators.required]],
      goalWeb: ['', [Validators.required]],
      anyelse: ['', []]      // Campo opcional
    });
  }

  public showNotification( type: string, message: string ): void {
    if(type === 'success')
      this.notificacion.success(message);
    else if(type === 'error')
      this.notificacion.error(message);
  }

  mandarFormulario() {
    if (this.formEmail.invalid) {
      this.formEmail.markAllAsTouched();
      return;
    }
    
    // Crear un objeto con los valores del formulario
    const formData = { ...this.formEmail.value };  // Cambiado a const

    // Eliminar los campos vacíos (si son opcionales) antes de enviarlos
    if (!formData.actualWeb) {
      delete formData.actualWeb;
    }
    if (!formData.anyelse) {
      delete formData.anyelse;
    }

    this.EnviarCorreo = true;

    //console.log('Enviando correo con los siguientes datos:', formData);

    // Enviar el correo usando el servicio
    this.serviceMail.sendEmail(formData).subscribe((res) => {
      //console.log('Respuesta del servicio de correo:', res);
      this.showNotification('success', 'Correo enviado');
      this.EnviarCorreo = false;
      this.formEmail.reset(); // Resetear el formulario
    }, (error) => {
      //console.error('Error al enviar el correo:', error);
      //console.log("Cuerpo del error:", error.error);
      this.showNotification('error', 'Error al enviar el correo');
      this.EnviarCorreo = false;
    });
  }
}
