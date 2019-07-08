import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Subhash', 'Suman', 'http://subhashyadav.com/wp-content/uploads/2013/12/favicon.png'),
    new Recipe('Subhash', 'Suman', 'http://subhashyadav.com/wp-content/uploads/2013/12/favicon.png')
  ];
  constructor() { }

  ngOnInit() {
  }

}
