import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  items = [
    { title: '¿Qué tan rápido será mi nuevo sitio web?', content: "Tu sitio web cargará rápido, incluso con imágenes y videos de alta calidad. Si tarda más de 2 segundos, los visitantes se irán antes de siquiera verlo. Las personas tienen una capacidad de atención corta: un sitio lento pierde negocios." },
    { title: '¿Mi web es compatible en celulares?', content: "Sí. Aproximadamente el 75% del tráfico proviene de celulares. Si tu sitio no funciona bien en dispositivos móviles o cualquier otro dispositivo, perderás la mayoría de tus clientes potenciales. Nos aseguraremos de que funcione sin problemas en cualquier dispositivo." },
    { title: '¿Cuánto tiempo tomará publicar mi sitio web?', content: "La mayoría de los sitios web están listos en 2 a 4 semanas. Te mantendremos actualizado sobre nuestro progreso en cada paso del camino, para que siempre sepas en qué etapa estamos. Cuanto antes esté en línea tu sitio, antes comenzarás a obtener resultados." },
    { title: '¿Cuánto costará un nuevo sitio web?', content: "El costo depende completamente de tus deseos, necesidades y presupuesto. Ofrezco precios personalizados para garantizar que pueda entregar resultados a cualquier tipo de cliente, sin importar su presupuesto. Si tu presupuesto es limitado, diseñaremos un paquete más accesible que aún resuelva tus necesidades sin endeudarte." },
    { title: '¿Puedes ayudarme con SEO?', content: "Sí. Ofrecemos servicios de SEO que ayudarán a que tu sitio web se posicione mejor en Google, lo que te permitirá atraer más clientes potenciales." },
    { title: '¿Qué pasa si no tengo todo el contenido listo?', content: "¡No te preocupes! Comenzaremos entendiendo tus necesidades y objetivos para el sitio, como atraer nuevos clientes. Luego, diseñaremos un sitio web personalizado y añadiremos funciones para ayudarte a lograrlo. Puedes completar los textos e imágenes más adelante, sin prisa." }
  ];

  expandedIndex: number | null = null;

  toggleAccordion(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
