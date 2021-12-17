import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  onAddItem(){
    console.log('add')
  }

  onDeleteItem(){
    console.log('delete')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
