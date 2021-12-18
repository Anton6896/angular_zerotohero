import {
    Component,
    OnInit,
    Input,
    SimpleChanges,
    OnChanges
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
    /**
     * Input is allow me to get data from top father component declaration
     */
    @Input() element: {
        type: string,
        name: string,
        content: string
    };

    constructor() {
        console.log('constructor')
    }

    ngOnInit(): void {
        console.log('ngOnInit')
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges : ', changes)
    }
}
