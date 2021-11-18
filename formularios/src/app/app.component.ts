import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  email = new FormControl('');

  updateEmail() {
    this.email.setValue("FarleyLindao.com.br");
  }
  onKey(event: any) { // without type info
    this.email.setValue(event.target.value) 
  }
}
