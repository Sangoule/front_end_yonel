import { Component, OnInit } from '@angular/core';
import {Product,TopSelling} from './personnes.data';
@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html'
})
export class PersonnesComponent implements OnInit {

  topSelling:Product[];

  constructor() { 

    this.topSelling=TopSelling;
  }

  ngOnInit(): void {
  }

}
