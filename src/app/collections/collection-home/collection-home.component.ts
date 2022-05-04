import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {name: "Tom", age: 21, role: "Designer"},
    {name: "Toe", age: 23, role: "Engineer"},
    {name: "Mac", age: 16, role: "Dev"},
  ];

  headers = [
    {key: "name", label: "Name"},
    {key: "age", label: "Age"},
    {key: "role", label: "Role"},
  ]

  constructor() { }

  ngOnInit() {
  }

}