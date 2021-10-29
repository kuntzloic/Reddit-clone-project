import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass']
})
export class DirectivesComponent implements OnInit {

  classA: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.classA = false;
  }

  toggleClass(){
    this.classA = !this.classA;
  }

}
