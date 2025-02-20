import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer-services',
  templateUrl: './footer-services.component.html',
  styleUrls: ['./footer-services.component.scss']
})
export class FooterServicesComponent {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  
  constructor(
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footer = document.querySelector('.footer');
    if (footer) {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        footer.classList.add('show');
      } else {
        footer.classList.remove('show');
      }
    }
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

  toggleMenu(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if(this.sidebarOpen)
      this.sidebarOpen = false;
  }
}
