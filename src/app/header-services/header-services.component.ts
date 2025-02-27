import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-services',
  templateUrl: './header-services.component.html',
  styleUrls: ['./header-services.component.scss']
})
export class HeaderServicesComponent implements OnInit {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';
  
  constructor(private renderer: Renderer2) {}

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

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
    const menu = document.querySelector('.main-menu');
    if (this.sidebarOpen) {
      this.renderer.addClass(menu, 'menu-open');
      this.renderer.removeClass(menu, 'menu-close');
    } else {
      this.renderer.addClass(menu, 'menu-close');
      this.renderer.removeClass(menu, 'menu-open');
    }
  }

  closeMenu() {
    this.sidebarOpen = false;
    const menu = document.querySelector('.main-menu');
    this.renderer.addClass(menu, 'menu-close');
    this.renderer.removeClass(menu, 'menu-open');
  }

  ngOnInit() {
    const menuItems = document.querySelectorAll('.main-menu li');
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  onClickedOutside(e: Event) {
    if (this.sidebarOpen) {
      this.closeMenu();
    }
  }
}

