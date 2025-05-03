import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-mytestimonials',
  templateUrl: './mytestimonials.component.html',
  styleUrls: ['./mytestimonials.component.scss']
})
export class MytestimonialsComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      once: true, // las animaciones solo ocurren una vez
      offset: 100, // offset (en px) desde el punto de activación original
      duration: 1000, // valores en ms, reemplazará los data-aos-duration
      easing: 'ease-in-out', // función de easing por defecto
      delay: 0, // valores en ms, reemplazará los data-aos-delay
      disable: 'mobile' // deshabilita animaciones en móviles para mejor rendimiento
    });
  }
}
