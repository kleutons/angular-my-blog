import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-post',
  templateUrl: './title-post.component.html',
  styleUrls: ['./title-post.component.css']
})
export class TitlePostComponent implements OnInit {
  @Input()
  title:string = '';
  @Input()
  date:string = '';
  @Input()
  category:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
