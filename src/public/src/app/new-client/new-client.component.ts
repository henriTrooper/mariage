import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css'],
  providers: [MessageService]

})
export class NewClientComponent implements OnInit {
  ngOnInit(): void {
  }
}
