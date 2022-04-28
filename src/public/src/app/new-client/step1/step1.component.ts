import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],

})
export class Step1Component implements OnInit {

  // Formulaire
  registerForm: FormGroup;
  patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  step1End : User;

  //Récupération du profil 
  user: SocialUser;

  //Affichage des steppers
  items: MenuItem[];

  //Met en couleur le step actuel
  submitted: boolean = false;


  //Pour les dropdowns
  isActive = [
    { name: 'Oui' },
    { name: 'Non' },
  ];

  mandat = [
    { name: 'Immobilier' },
    { name: 'Conciergerie' },
  ];

  prospect = [
    { name: 'Mandataire' },
    { name: 'Agence' },
    { name: 'Particulier' },
    { name: 'Professionnel' },
  ];


  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute

  ) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.back) { // route si retour en arriere
        const paramBack = JSON.parse(params.back);
        console.log('back 1', paramBack)
        this.step1End = paramBack
        this.initFormBack();
      } else {
        this.initFormEmpty();
      }
    })
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
    });

    //Parametre du stepper
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
   * Spinner
   * @param time 
   */
  spinnerFunct(time: any): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, time);
  }


  /**
   * Formulaire si retour en arriere
   */
  initFormBack(): void {
    this.registerForm = this.fb.group({
      email: this.step1End.email,
      password: this.step1End.password,
      passwordConfirmation: this.step1End.passwordConfirmation,
      isActive: this.step1End.isActive,
      mandat: this.step1End.mandat,
      nom: this.step1End.nom,
      prenom: this.step1End.prenom,
      prospect: this.step1End.prospect,
      telephone: this.step1End.telephone,
      adresse: this.step1End.adresse,
      note: this.step1End.note,
      document: this.fb.array([]),
      bien: this.fb.array([]),
      rdv: this.fb.array([]),
    });
  }


  /**
   * Formualaire de base
   */
  initFormEmpty(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern(this.patternEmail)]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      isActive: ['', Validators.required],
      mandat: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      prospect: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      note: ['Aucune Note'],
    });
  }


  /**
   * Validation du formulaire
   * @param fieldName 
   */
  isValidInput(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid &&
      (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched);
  }

  /**
   * Passage page suivante
   */
  nextPage() {
    // SI on est entrain de revenir en arriére
   console.log('value', this.registerForm.value)
    if(this.registerForm.value.document  || this.registerForm.value.bien || this.registerForm.value.rdv){
       //Si on a des documents
      if(this.step1End.document){
        for (let i = 0; i < this.step1End.document.length; i++) {
          this.registerForm.value.document.push(this.step1End.document[i]);
        }
      }
      //Si on a des biens
      if(this.step1End.bien){
        for (let i = 0; i < this.step1End.bien.length; i++) {
          this.registerForm.value.bien.push(this.step1End.bien[i]);
        }
      }
      //Si on a des rdvs
      if(this.step1End.rdv){
        for (let i = 0; i < this.step1End.rdv.length; i++) {
          this.registerForm.value.rdv.push(this.step1End.rdv[i]);
        }
      }
      this.step1End = this.registerForm.value
      this.router.navigate(['step2/document'], { queryParams: { back: JSON.stringify(this.step1End) }, skipLocationChange: true });
      this.submitted = true;
    } else { // si c'est la premiere fois
      this.step1End = this.registerForm.value
      if (this.step1End.password !== this.step1End.passwordConfirmation) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password non identique' });
      } else {
        this.messageService.add({ severity: 'info', summary: 'Save Personal Information', detail: '' });
        console.log('step1 End', this.step1End)
        this.router.navigate(['step2/document'], { queryParams: { filter: JSON.stringify(this.step1End) }, skipLocationChange: true });
        this.submitted = true;
      }
    }
  }
}

