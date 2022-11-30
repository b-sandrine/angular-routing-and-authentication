import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent {
  specialEvents: any = {}

  constructor(private _specialEvents: EventService, private _router: Router) {}

  ngOnInit() {
    this._specialEvents.getSpecialEvents().subscribe(
      res => {
        console.log(res)
        this.specialEvents = res
      },
      err => console.log(err)
    )
  }
}
