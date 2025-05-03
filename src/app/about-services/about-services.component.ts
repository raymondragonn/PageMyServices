import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-services',
  templateUrl: './about-services.component.html',
  styleUrls: ['./about-services.component.scss']
})
export class AboutServicesComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800, // Reducido para que sea más suave
      easing: 'ease-out',
      disable: 'mobile'
    });
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    const headerOffset = 150; // Ajusta este valor según la altura de tu header
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  }
}
