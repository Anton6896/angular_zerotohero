import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipesList: Recipe[] = [
    new Recipe('recName1',
      'description 1',
      'https://static01.nyt.com/images/2021/12/13/dining/MC-Classic-Potato-Latkes/merlin_199179672_13ff5d80-3b33-46de-9904-0ccaabe97917-articleLarge.jpg'
    ),
    new Recipe('recName2',
      'description 2',
      'https://static01.nyt.com/images/2021/12/13/dining/MC-Classic-Potato-Latkes/merlin_199179672_13ff5d80-3b33-46de-9904-0ccaabe97917-articleLarge.jpg'
    ),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
