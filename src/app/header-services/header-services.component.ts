import { Component } from '@angular/core';

@Component({
  selector: 'app-header-services',
  templateUrl: './header-services.component.html',
  styleUrls: ['./header-services.component.scss']
})
export class HeaderServicesComponent {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  
  constructor(
  ) {}

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

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }
}

