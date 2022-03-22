import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sum(number1: number, number2: number): number {
    return number1 + number2;
  }

  public subtarct(number1: number, number2: number): number {
    return number1 - number2;
  }


}
