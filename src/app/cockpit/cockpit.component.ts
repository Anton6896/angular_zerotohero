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

  newServerContent: string = '';

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>()
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>()

  onAddServer(serverName) {
    let name = serverName.value
    this.serverCreated.emit({name: name, content: this.newServerContent})
  }

  onAddBlueprint(serverName) {
    let name = serverName.value
    this.blueprintCreated.emit({name: name, content: this.newServerContent})
  }
}
