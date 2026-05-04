import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiAuth } from '../services/api-auth';

@Component({
  selector: 'app-fogort',
  imports: [FormsModule],
  templateUrl: './fogort.html',
  styleUrl: './fogort.scss',
})
export class Fogort {
  constructor(private api: ApiAuth, private cdr: ChangeDetectorRef) {}

  @Input() email: string = '';
  @Input() changeOrdForgot = '';

  changePassword(data: any) {
    this.api.forgort(data).subscribe({
      next: () => alert('Password changed successfully!'),
      error: (er) => alert(er.error?.message || er.message),
    });
  }

  sendPassword() {
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }
    alert(`If an account exists for ${this.email}, a reset link has been sent.`);
  }
}