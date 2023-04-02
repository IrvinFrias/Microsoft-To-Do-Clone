import { Component } from '@angular/core';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent {
  day: Date = new Date();
  formatDate: String = this.day.toLocaleDateString('es-ES',
    {weekday: 'long', year: 'numeric', month:'long', day:'numeric'})

}
