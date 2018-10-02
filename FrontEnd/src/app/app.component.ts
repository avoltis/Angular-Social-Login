import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd Login';

  constructor(private apiService: ApiService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.apiService.getMessages();
  }
}
