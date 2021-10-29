import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent implements OnInit {

  // articles: Array<string>;
  people: Array<any>;

  constructor() {
    // this.articles = ['Angular', 'React', 'Vue', 'Python', 'Java'];
    this.people = [
      {name: "John", age:28, city: "New-York"},
      {name: "Mickael", age:22, city: "Paris"},
      {name: "Daniel", age:27, city: "Berlin"},
    ];
  }

  ngOnInit(): void {
    this.people.forEach(people => {
      console.log(people);
    })
  }

}
