import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events: any = {};

  constructor(private _events: EventService, private _router: Router ) {}
  ngOnInit() {
    this._events.getEvents().subscribe( 
      res => {
        this.events = res
        console.log(res);
      }, err => console.log(err)
    )
  }
}
