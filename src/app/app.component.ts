import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sometext';
  showData: {} = {showRecipe: true, showShopping: false}

  onRecipePush(data: { showRecipe: boolean, showShopping: boolean }) {
    this.showData = data
  }

  onShoppingPush(data: { showRecipe: boolean, showShopping: boolean }) {
    this.showData = data
  }
}
