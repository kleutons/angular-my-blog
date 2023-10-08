import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private id:string | null = '';
  @Input()
  postImg:string = '';
  @Input()
  postTitle:string = '';
  @Input()
  postDate:string = '';
  @Input()
  postCategory:string = '';
  @Input()
  postContent:string = '';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get('id');
    })
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter( 
                              article => article.id == id
                              )[0];
    if(result){
      this.postTitle = result.title;
      this.postImg = result.img;
      this.postContent = result.content;
      this.postDate = result.date;
      this.postCategory = result.category;
    }
  }

}
