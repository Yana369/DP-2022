import { Component } from '@angular/core';
import { Birds } from './interfaces/birds';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab1f';
  birdsList:Birds[]=[];
}
