import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presta-card-grid',
  templateUrl: './presta-card-grid.component.html',
  styleUrls: ['./presta-card-grid.component.css'],
})
export class PrestaCardGridComponent implements OnInit {
  @Input() provider: any;

  constructor() {}

  ngOnInit(): void {}
}
