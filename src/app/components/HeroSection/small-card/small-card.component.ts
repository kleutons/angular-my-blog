import { Component, Input, OnInit } from '@angular/core';
import { TypeArticle } from '../../../../types/types'

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  
  @Input() 
  smallCards:TypeArticle[] | null = null;

  constructor() { }

  ngOnInit(): void { }

}
