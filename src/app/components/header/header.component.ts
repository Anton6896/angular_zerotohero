import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myFlag: boolean = true;

  @Output()
  recipeEmitter = new EventEmitter<{ showRecipe: boolean, showShopping: boolean }>()

  @Output()
  shoppingEmitter = new EventEmitter<{ showRecipe: boolean, showShopping: boolean }>()


  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipe() {
    this.recipeEmitter.emit({ showRecipe: true, showShopping: false })
  }

  onShoppingList() {
    this.shoppingEmitter.emit({ showRecipe: false, showShopping: true })
  }

}
