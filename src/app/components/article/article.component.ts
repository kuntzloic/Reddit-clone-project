import { Component, OnInit } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor() {
    this.article = new Article("Angular Course", "https://angular.io", 50);
  }

  ngOnInit(): void {
  }

}
