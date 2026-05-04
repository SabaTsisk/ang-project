import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Currency } from '../services/currency';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public auth: Auth, public currency: Currency, private router: Router) {}

  searchQuery = '';
  currencyMenuOpen = false;
  userMenuOpen = false;
  mobileMenuOpen = false;

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/home'], { queryParams: { keywords: this.searchQuery.trim() } });
      this.searchQuery = '';
      this.mobileMenuOpen = false;
    }
  }

  toggleCurrencyMenu() {
    this.currencyMenuOpen = !this.currencyMenuOpen;
    this.userMenuOpen = false;
  }

  setCurrency(cur: 'USD' | 'GEL') {
    this.currency.setCurrency(cur);
    this.currencyMenuOpen = false;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.currencyMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.userMenuOpen = false;
    this.currencyMenuOpen = false;
  }

  goToProfile() {
    this.userMenuOpen = false;
    this.router.navigateByUrl('/profile');
  }

  logout() {
    this.userMenuOpen = false;
    this.mobileMenuOpen = false;
    this.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.currency-wrap')) this.currencyMenuOpen = false;
    if (!target.closest('.user-menu-wrap')) this.userMenuOpen = false;
  }
}