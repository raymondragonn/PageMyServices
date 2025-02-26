import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { NotifierService } from 'angular-notifier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookacall',
  templateUrl: './bookacall.component.html',
  styleUrls: ['./bookacall.component.scss']
})
export class BookacallComponent {
  formEmail: FormGroup;
  EnviarCorreo: boolean = false;

  constructor(private fb: FormBuilder, private serviceMail: EmailService, private notifier: NotifierService) {
    this.notifier = notifier;
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
    this.notifier.notify( type, message );
  }

  mandarFormulario() {
    if (this.formEmail.invalid) {
      this.formEmail.markAllAsTouched();
      return;
    }
    
    // Crear un objeto con los valores del formulario
    let formData = { ...this.formEmail.value };

    // Eliminar los campos vacíos (si son opcionales) antes de enviarlos
    if (!formData.actualWeb) {
      delete formData.actualWeb;
    }
    if (!formData.anyelse) {
      delete formData.anyelse;
    }

    this.EnviarCorreo = true;

    // Enviar el correo usando el servicio
    this.serviceMail.sendEmail(formData).subscribe((res) => {
      this.showNotification('success', 'Correo enviado');
      this.EnviarCorreo = false;
    }, (error) => {
      this.showNotification('error', 'Error al enviar el correo');
      this.EnviarCorreo = false;
    });
  }
}
