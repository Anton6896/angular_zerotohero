import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../../../shared/ingridient.model'

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingresientsList: Ingridient[] = [
    new Ingridient('ingridient1', '', 12),
    new Ingridient('ingridient2', '', 5),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
