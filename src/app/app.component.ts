import { Component } from '@angular/core';
import { Article } from './components/article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  articles: Article[];

  constructor(){
    this.articles = [];
    // let article = new Article("Angular", "https://angular.io", 50);
    // this.articles.push(article);
  }

  createNewArticle(title: HTMLInputElement, link: HTMLInputElement){
    let article = new Article(title.value, link.value);
    this.articles.push(article);
  }

  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
  //   console.log(title.value, link.value);
  //   return false;
  // }
}
