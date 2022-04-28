import { User } from './../../models/user';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  //Param stepper
  items: MenuItem[];
  submitted: boolean = false;

  // Nouveau formulaire
  step2Started : User;

  //Ancien formualire
  step1Data

  //Upload de documents
  documentUpload = []

  step2End

  constructor(
    private router: Router,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.filter){
        this.step1Data = JSON.parse(params.filter);
        this.step2Started = {
          email: this.step1Data.email,
          password: this.step1Data.password,
          passwordConfirmation: this.step1Data.passwordConfirmation,
          isActive: this.step1Data.isActive,
          mandat: this.step1Data.mandat,
          nom: this.step1Data.nom,
          prenom: this.step1Data.prenom,
          prospect: this.step1Data.prospect,
          telephone: this.step1Data.telephone,
          adresse: this.step1Data.adresse,
          note: this.step1Data.note,
          document: [{}]
        };
        this.step2Started.document.splice(-1, 1);
        console.log('step2 started', this.step2Started)
    }
    if (params.back){
      this.step1Data = JSON.parse(params.back);
      this.step2Started = {
        email: this.step1Data.email,
        password: this.step1Data.password,
        passwordConfirmation: this.step1Data.passwordConfirmation,
        isActive: this.step1Data.isActive,
        mandat: this.step1Data.mandat,
        nom: this.step1Data.nom,
        prenom: this.step1Data.prenom,
        prospect: this.step1Data.prospect,
        telephone: this.step1Data.telephone,
        adresse: this.step1Data.adresse,
        note: this.step1Data.note,
        document:  this.step1Data.document,
        bien :this.step1Data.bien,
        rdv :this.step1Data.rdv,
      };
      console.log('step2 back', this.step2Started)
  }
      
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
   * Upload documents
   * @param event 
   */
  onUpload(event) {
    for (let file of event.files) {
      const filesEvent = {
        titre: file.name,
        date: file.lastModifiedDate
      }
      this.step2Started.document.push(filesEvent);
    }
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
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
    if(this.step2Started.bien){
      this.router.navigate(['step3/bien'], { queryParams: { back: JSON.stringify(this.step2Started) }, skipLocationChange: true });
      this.submitted = true;
    } else{
    this.router.navigate(['step3/bien'], { queryParams: { filter: JSON.stringify(this.step2Started)}, skipLocationChange: true });
    this.submitted = true;
    }
  };

  /**
   * Page précédente
   */
  prevPage() {
    this.router.navigate(['newClient'], { queryParams: { back: JSON.stringify(this.step2Started)}, skipLocationChange: true });
    this.submitted = false;
  };
}
