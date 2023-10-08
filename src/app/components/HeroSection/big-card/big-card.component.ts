import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  cardId:string = '';
  @Input()
  cardImg:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDate:string = '';
  @Input()
  cardContent:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
