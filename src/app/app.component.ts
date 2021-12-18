import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  serverElements = [];

  onServerAdded(data: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    })
  }

  onBlueprintAdded(data: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: data.name,
      content: data.content
    })
  }

  onDeleteEntry() {
    this.serverElements.pop()
  }

  ngOnDestroy() {
    console.log('destroy working')
  }
}
