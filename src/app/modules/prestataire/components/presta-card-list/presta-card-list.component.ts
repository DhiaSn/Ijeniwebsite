import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presta-card-list',
  templateUrl: './presta-card-list.component.html',
  styleUrls: ['./presta-card-list.component.css'],
})
export class PrestaCardListComponent implements OnInit {
  @Input() provider: any;
  constructor() {}

  ngOnInit(): void {}
}
