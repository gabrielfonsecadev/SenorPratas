import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled: boolean = false;
  isSearchVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 0, 0.1;
  }

  constructor(private router: Router) {

  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; // Alterna entre true e false
  }

  search(term: any) {
    this.router.navigate(['/search'], {
      queryParams: { q: term.value }
    });
  }
}
