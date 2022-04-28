import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {

  items: MenuItem[];
  submitted: boolean = false;

  step4Data;
  step5Started;


  displayModal: boolean;


  constructor(
    private routingService: RoutingService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.filter){
          this.step4Data = JSON.parse(params.filter);
      }
      //onsole.log('param', params)
      this.step5Started = {
        email: this.step4Data.email,
        password: this.step4Data.password,
        passwordConfirmation: this.step4Data.passwordConfirmation,
        isActive: this.step4Data.isActive,
        mandat: this.step4Data.mandat,
        nom: this.step4Data.nom,
        prenom:this.step4Data.prenom,
        prospect: this.step4Data.prospect,
        telephone:this.step4Data.telephone,
        adresse: this.step4Data.adresse,
        note: this.step4Data.note,
        document: this.step4Data.document,
        bien :this.step4Data.bien,
        rdv:this.step4Data.rdv,
      };
      console.log('step5 started', this.step5Started)

    });

    this.items = [{
      label: 'Personal',
      routerLink: 'newClient'
    },
    {
      label: 'Documents',
      routerLink: 'step2/document'
    },
    {
      label: 'Biens',
      routerLink: 'step3/bien'
    },
    {
      label: 'RDV',
      routerLink: 'step4/rdv'
    },
    {
      label: 'Confirmation',
      routerLink: 'step5/confirmation'
    }
    ];
  }

  showModalDialog() {
    this.displayModal = true;
}
spinnerFunct(time: any): void {
  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, time);
}

  register(): void {
    this.submitted = true;
    console.log('before', this.step5Started)
    if(this.step5Started.isActive.name || this.step5Started.prospect.name || this.step5Started.mandat.name){
      if(this.step5Started.isActive.name){
        this.step5Started.isActive = this.step5Started.isActive.name
        if(this.step5Started.isActive === "Non"){
          this.step5Started.isActive = false
        }
        if(this.step5Started.isActive === "Oui"){
          this.step5Started.isActive = true
        }
      }
      if(this.step5Started.prospect.name){
        this.step5Started.prospect = this.step5Started.prospect.name
      }
      if(this.step5Started.mandat.name){
        this.step5Started.mandat = this.step5Started.mandat.name
      }
    }
    const newClient: User = this.step5Started

     this.spinnerFunct(100000000);
    this.routingService.newClient(newClient)
      .subscribe(() => {
        this.routingService.addUser(newClient)
          .subscribe(saveUser => {
            this.spinnerFunct(0);
            this.displayModal = false;
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sucess New Client' });
            this.router.navigate(['findAllUser'])
          }),
          (errorResponse) => {
            this.spinnerFunct(0);
            this.displayModal = false;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
          }
      },
        (errorResponse) => {
          this.spinnerFunct(0);
          this.displayModal = false;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
        });
  }

  /**
   * Page précédente
   */
  prevPage() {
    this.router.navigate(['step4/rdv'], { queryParams: { back: JSON.stringify(this.step5Started)}, skipLocationChange: true });
    this.submitted = false;

  };

}
