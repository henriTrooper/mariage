
import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

import { NgxSpinnerService } from 'ngx-spinner';

import { MessageService } from 'primeng/api';


import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  user: SocialUser;

  socialConnect = {
    email: ''
  }


  constructor(
    private spinner: NgxSpinnerService,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    document.querySelector('#FirstBody').setAttribute('style', 'overflow:hidden');
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
    });

    this.initForm();

    // Btn submit
    const button = document.querySelector('.button');
    const submit = document.querySelector('.submit');
    
    function toggleClass() {
      this.classList.toggle('active');
    }
    
    function addClass() {
      this.classList.add('finished');
    }
    
    button.addEventListener('click', toggleClass);
    button.addEventListener('transitionend', toggleClass);
    button.addEventListener('transitionend', addClass);
  }

  spinnerFunct(time: any): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, time);
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern(this.patternEmail)]],
      password: ['', Validators.required]
    });
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  login(): void {
    this.auth.login(this.loginForm.value)
      .subscribe((token) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sucess Login' });
        this.router.navigate(['/'], { queryParams: { registered: 'success' } });
      },
        (errorResponse) => {
          this.spinnerFunct(0);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
        });
  }

  /*  reload() {
     this._document.defaultView.location.reload();
   } */




  signInWithGoogle(): void {
    this.spinnerFunct(100000000);
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.socialConnect.email = userData.email;
        this.auth.login(this.socialConnect)
          .subscribe((token) => {
            this.spinnerFunct(0);
            this.router.navigate(['/']);
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucess Login with Google'});
          },
            (errorResponse) => {
              this.spinnerFunct(0);
              this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
            });
      }).catch(err => {
        this.spinnerFunct(0);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login with an other connection' });
      })
  }


  signInWithFB(): void {
    this.spinnerFunct(100000000);
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.socialConnect.email = userData.email;
        this.auth.login(this.socialConnect)
          .subscribe((token) => {
            this.spinnerFunct(0);
            this.router.navigate(['/']);
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucess Login with FB'});
          },
            (errorResponse) => {
              this.spinnerFunct(0);
              this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
            });
      }).catch(err => {
        this.spinnerFunct(0);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login with an other connection' });
      })
  }


  signInWithAmazon(): void {
    this.spinnerFunct(100000000);
    this.socialAuthService.signIn(AmazonLoginProvider.PROVIDER_ID).then(
      (userData) => {
        this.socialConnect.email = userData.email;
        this.auth.login(this.socialConnect)
          .subscribe((token) => {
            this.router.navigate(['/']);
            this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucess Login with AWS'});
          },
            (errorResponse) => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse});
            });
      }).catch(err => {
        this.spinnerFunct(0);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login with an other connection' });
      })
  }

  signOut(): void {
    this.auth.logout(this.user);
  }



}