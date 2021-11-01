import { Component } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'RxjsAngular';
  data: any = null;

  constructor(private observalvelService :ObservableService){
    this.observalvelService.getObservavel().subscribe(newObj =>{
      this.data =newObj;
    });
  }

  mudarObjetoObservavel(){
    const newObj = {
      nome: "Farley Rufino"
    }
    this.observalvelService.setObservavel(newObj)
  }
}
