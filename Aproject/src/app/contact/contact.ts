import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  name = '';
  email = '';
  message = '';
  sent = false;

  send() {
    if (this.name && this.email && this.message) {
      this.sent = true;
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}