import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test recipe", "this is a test",
      "https://static01.nyt.com/images/2014/01/10/dining/recipes-pizzabaconbluecheese/recipes-pizzabaconbluecheese-articleLarge.jpg"),
    new Recipe("A test recipe", "this is a test",
      "https://static01.nyt.com/images/2014/01/10/dining/recipes-pizzabaconbluecheese/recipes-pizzabaconbluecheese-articleLarge.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
