import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../routing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  items: MenuItem[];
  submitted: boolean = false;

  registerForm: FormGroup
  step3Started : User;
  step2Data;


  constructor(
    private routingService: RoutingService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.filter){
          this.step2Data = JSON.parse(params.filter);
          this.step3Started = {
            email: this.step2Data.email,
            password: this.step2Data.password,
            passwordConfirmation: this.step2Data.passwordConfirmation,
            isActive: this.step2Data.isActive,
            mandat: this.step2Data.mandat,
            nom: this.step2Data.nom,
            prenom:this.step2Data.prenom,
            prospect: this.step2Data.prospect,
            telephone:this.step2Data.telephone,
            adresse: this.step2Data.adresse,
            note: this.step2Data.note,
            document: this.step2Data.document,
            bien :[{}]
          };
          this.step3Started.bien.splice(-1, 1);

      }
      if (params.back){
        this.step2Data = JSON.parse(params.back);
      //onsole.log('param', params)
      this.step3Started = {
        email: this.step2Data.email,
        password: this.step2Data.password,
        passwordConfirmation: this.step2Data.passwordConfirmation,
        isActive: this.step2Data.isActive,
        mandat: this.step2Data.mandat,
        nom: this.step2Data.nom,
        prenom:this.step2Data.prenom,
        prospect: this.step2Data.prospect,
        telephone:this.step2Data.telephone,
        adresse: this.step2Data.adresse,
        note: this.step2Data.note,
        document:  this.step2Data.document,
        bien :this.step2Data.bien,
        rdv :this.step2Data.rdv,
      };
    }
      console.log('step3 started', this.step3Started)
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

  /**
   * Add d'un objet bien
   */
  addBien(){
    const newBien = {
      nom: '',
      model: '',
      description:'',
      lien: '',
    tarif:{
      payer:0,
      nonPayer:0,
      date: new Date()
  },
   date: new Date()
  }
    this.step3Started.bien.push(newBien);
  }

  /**
   * Delete d'un objet bien
   */
  removeBien() {
    this.step3Started.bien.splice(-1, 1);
}


/**
 * Formatage de la date
 * @param date 
 */
  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  /**
   * Page suivante
   */
  nextPage() {
    if(this.step3Started.rdv){
      this.router.navigate(['step4/rdv'], { queryParams: { back: JSON.stringify(this.step3Started) }, skipLocationChange: true });
      this.submitted = true;
    } else{
    console.log('started end', this.step3Started)
    this.router.navigate(['step4/rdv'], { queryParams:{ filter: JSON.stringify(this.step3Started)}, skipLocationChange: true });
    this.submitted = true;
  }
}

  /**
   * Page précédente
   */
  prevPage() {
    this.router.navigate(['step2/document'], { queryParams: { back: JSON.stringify(this.step3Started)}, skipLocationChange: true });
    this.submitted = false;

  };

}

