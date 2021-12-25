import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipeData: Recipe | null;

  onEdit() {

  }

  onDelete() {

  }

  onSave() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
