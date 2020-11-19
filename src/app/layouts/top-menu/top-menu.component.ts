import {AfterViewInit, Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  animations: [
    trigger('smoothAppearance', [
      state('initial', style({
        top: -100
      })),
      state('final', style({
        top: 0
      })),
      transition('initial => final', animate('0.3s'))
    ]),
  ]
})
export class TopMenuComponent implements AfterViewInit {
  isCollapsed = true;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.isCollapsed = false;

  }

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
