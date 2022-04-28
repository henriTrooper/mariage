import { Component } from '@angular/core';
import { AuthService } from '../app/auth/auth.service';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]

})
export class AppComponent {
  title = 'Front Dev';
  constructor(public auth: AuthService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
}

  }

