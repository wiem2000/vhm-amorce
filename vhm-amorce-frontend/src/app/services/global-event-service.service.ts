import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


//class for managing global events
export class GlobalEventService {

  //instance of 'Subject' to handle data updates
  private dataUpdatedSubject = new Subject<void>();

  //method that allows components to subscribe to data update events
  dataUpdated$(): Observable<void> {
    return this.dataUpdatedSubject.asObservable();
  }

  // Emit a data update event to notify subscribers
  emitDataUpdated() {
    this.dataUpdatedSubject.next();
  }
}
