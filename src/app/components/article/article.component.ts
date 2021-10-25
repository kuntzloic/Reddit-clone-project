import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;

  constructor() {
    this.article = new Article("Angular Course", "https://angular.io", 50);
    console.log(this.article);
  }

  ngOnInit(): void {
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

}
