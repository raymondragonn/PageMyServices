import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  items = [
    { title: 'Welcome', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'KCD', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'Epic Web Conf', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'Tech', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'Life', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'Courses', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." },
    { title: 'Clubs', content: "All the stuff I'm up to goes here. You might consider adding special notification settings to the announcements channel so you don't miss anything important." }
  ];

  expandedIndex: number | null = null;

  toggleAccordion(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
