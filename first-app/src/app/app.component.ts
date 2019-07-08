import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
  h3 {
    color: red;
  }`]
})
export class AppComponent {
  title = 'Angular APP';
  name = 'Subhash';

  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
  isavailable = true;
}
