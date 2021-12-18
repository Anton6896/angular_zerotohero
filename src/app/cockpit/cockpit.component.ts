import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  newServerName: string = '';
  newServerContent: string = '';

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>()
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>()

  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent})
  }
}
