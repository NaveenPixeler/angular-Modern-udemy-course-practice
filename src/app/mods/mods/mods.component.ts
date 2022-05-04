import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css'],
})
export class ModsComponent implements OnInit {
  openModal = false;

  items = [
    {
      title: 'Why is the sky blue?',
      content: 'Sky is blue because',
    },
    {
      title: 'What does an orange tastes like?',
      content: 'Orange taste really sweet',
    },
    {
      title: 'Cat color is?',
      content: 'Show me the cat color',
    },
  ];

  ngOnInit() {}

  onClick() {
    this.openModal = !this.openModal;
  }
}
