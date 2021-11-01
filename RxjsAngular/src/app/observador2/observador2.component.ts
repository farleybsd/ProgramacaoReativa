import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-observador2',
  templateUrl:'./observador2.component.html',
  styles: [
  ]
})
export class Observador2Component implements OnInit {
  data: any = null;
  constructor(private observalvelService :ObservableService) {
    this.observalvelService.getObservavel().subscribe(newObj =>{
      this.data =newObj;
    });
   }

  ngOnInit(): void {
  }

}
