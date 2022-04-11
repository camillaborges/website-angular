import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toAbout() {
    document.getElementById("about")!.scrollIntoView({behavior:"smooth"});
  }

  toExperience() {
    document.getElementById("experience")!.scrollIntoView({behavior:"smooth"});
  }

  toProjects() {
    document.getElementById("projects")!.scrollIntoView({behavior:"smooth"});
  }

  toContact() {
    document.getElementById("contact")!.scrollIntoView({behavior:"smooth"});
  }

  navbarfixed: boolean = false;
  
  @HostListener('window:scroll', ['$event']) onscroll() {
    if(window.scrollY > 50) {
      this.navbarfixed = true
    } else {
    this.navbarfixed = false;
    }
  }

}

