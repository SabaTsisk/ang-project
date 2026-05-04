import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  principlesOpen: boolean[] = [false, false, false];
  faqOpen: boolean[] = [false, false, false, false, false, false];

  principles = [
    {
      title: 'Customer focus',
      text: 'Everything we do starts and ends with the customer. We obsess over their needs, listen to their feedback, and constantly improve to exceed expectations.'
    },
    {
      title: 'Betting on reputation',
      text: 'We believe trust is earned over time through consistent actions. Our reputation is our most valuable asset and we protect it fiercely.'
    },
    {
      title: 'Fast, convenient and enjoyable',
      text: 'Shopping should be effortless and fun. We remove friction at every step so customers can find what they want and get it quickly.'
    },
  ];

  faqs = [
    { q: 'How long will delivery take?', a: 'Standard delivery takes 3–5 business days. Express delivery is available at checkout and typically arrives within 1–2 business days.' },
    { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to over 50 countries worldwide. International shipping times vary between 7–14 business days depending on the destination.' },
    { q: 'Do I need an account to place an order?', a: 'No, you can check out as a guest. However, creating an account lets you track orders, save favourites, and speed up future checkouts.' },
    { q: 'How can I track my order?', a: 'Once your order ships you will receive a confirmation email with a tracking number. You can use it on our website or the courier\'s site.' },
    { q: 'What are the product refund conditions?', a: 'We offer a 30-day return policy on most items. Products must be unused and in original packaging. Some exclusions apply for software and opened electronics.' },
  ];

  brands = ['MOTOROLA', 'SAMSUNG', 'SONY', 'Apple', 'Xiaomi', 'Lenovo'];

  togglePrinciple(i: number) { this.principlesOpen[i] = !this.principlesOpen[i]; }
  toggleFaq(i: number) { this.faqOpen[i] = !this.faqOpen[i]; }
}