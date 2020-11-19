import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        top: 0
      })),
      state('final', style({
        top: 100
      })),
      transition('initial=>final', animate('300ms'))
    ]),
  ]
})
export class TopMenuComponent implements OnInit {
  isCollapsed = true;

  constructor() {
  }

  ngOnInit(): void {
    this.isCollapsed = false;
  }
}
