import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  observavel: Subject<any> = new Subject();
  constructor() { }

  setObservavel(newValue:any){
    this.observavel.next(newValue)
  }

  getObservavel() : Observable<any>{
    return this.observavel.asObservable();
  }
}
