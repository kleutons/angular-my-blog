import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'
import { TypeArticle } from '../../../types/types'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  @Input()
  homeBigCard:TypeArticle | null = null;
  @Input()
  smallCardArray:TypeArticle[] | null = null;

  constructor() { }

  setValuesToComponent(id:string){
    return dataFake.filter( 
                              article => article.id == id
                              )[0];
  }
  setValuesSamallCards(){
    return dataFake.filter( 
      article => ( Number(article.id) > 0 && Number(article.id) <= 3 )
      );
  }

  ngOnInit(): void {
    
    this.homeBigCard = this.setValuesToComponent('0');
    this.smallCardArray = this.setValuesSamallCards();
  }

}
