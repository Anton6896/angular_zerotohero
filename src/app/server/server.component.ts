import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverNme: string = 'SomeName';
  isEnabled: boolean = false;
  isChanges: boolean = true;
  serverCreationStatus: string = 'initial string';
  buttonName: string = 'click me'
  showPast: boolean = false;
  serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online'
  availbleData: string[] = ['data1', 'data2']


  onCreateServer() {
    this.isChanges = !this.isChanges;
    this.serverCreationStatus = this.isChanges ? '-------' : this.serverNme
  }

  onUpdateName(event: Event) {
    this.serverCreationStatus = event.target['value']
  }

  onShowPast() {
    this.showPast = !this.showPast
  }

  getServerName() {
    return this.serverNme
  }

  onSetServerStatus() {
    this.availbleData.push('newone')
    console.log(this.availbleData)
    this.serverStatus = 'online'
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
