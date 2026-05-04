import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-helpp',
  imports: [CommonModule, RouterLink],
  templateUrl: './helpp.html',
  styleUrl: './helpp.scss',
})
export class Helpp {
  topics = [
    { icon: '📦', title: 'Orders & Shipping', desc: 'Track orders, delivery times, and shipping options.' },
    { icon: '↩', title: 'Returns & Refunds', desc: 'How to return a product and get your money back.' },
    { icon: '💳', title: 'Payments', desc: 'Accepted payment methods, billing, and invoices.' },
    { icon: '🔐', title: 'Account & Security', desc: 'Manage your account, password, and privacy settings.' },
    { icon: '🛒', title: 'Cart & Checkout', desc: 'Help with adding items, coupons, and placing orders.' },
    { icon: '📞', title: 'Contact Support', desc: 'Reach our team via email, phone, or live chat.' },
  ];
}