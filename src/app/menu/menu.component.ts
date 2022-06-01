import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public navbarfixed: boolean = false;
  public mobileMenuOpen: boolean = false;
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 50) {
      this.navbarfixed = true
    } else {
    this.navbarfixed = false;
    }
  }

  public toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  public toAbout(): void {
    document.getElementById("about-me")!.scrollIntoView({behavior:"smooth"});
    this.closeMobileMenu();
  }

  public toExperience(): void {
    document.getElementById("about-me")!.scrollIntoView({behavior:"smooth"});
    this.closeMobileMenu();
  }

  public toProjects(): void {
    document.getElementById("projects")!.scrollIntoView({behavior:"smooth"});
    this.closeMobileMenu();
  }

  public toContact(): void {
    document.getElementById("contact")!.scrollIntoView({behavior:"smooth"});
    this.closeMobileMenu();
  }

  private closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
     



