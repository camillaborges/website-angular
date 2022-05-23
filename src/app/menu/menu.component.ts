import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public navbarfixed: boolean = false;
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 50) {
      this.navbarfixed = true
    } else {
    this.navbarfixed = false;
    }
  }

  public toAbout(): void {
    document.getElementById("about")!.scrollIntoView({behavior:"smooth"});
  }

  public toExperience(): void {
    document.getElementById("experience")!.scrollIntoView({behavior:"smooth"});
  }

  public toProjects(): void {
    document.getElementById("projects")!.scrollIntoView({behavior:"smooth"});
  }

  public toContact(): void {
    document.getElementById("contact")!.scrollIntoView({behavior:"smooth"});
  }
}
     



