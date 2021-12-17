import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  /**
   * Input is allow me to get data from top father component declaration 
   */
  @Input() element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
