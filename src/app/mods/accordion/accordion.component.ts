import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedIndex = 0;

  constructor() {}

  ngOnInit() {}

  onClick(index: number) {
    return this.openedIndex === index
      ? (this.openedIndex = -1)
      : (this.openedIndex = index);
    // this.openedIndex = index;
  }
}
