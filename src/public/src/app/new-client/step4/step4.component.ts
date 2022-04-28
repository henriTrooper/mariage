import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {

  items: MenuItem[];
    submitted: boolean = false;

    step3Data;
    step4Started: User


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.filter){
          this.step3Data = JSON.parse(params.filter);
          this.step4Started = {
            email: this.step3Data.email,
            password: this.step3Data.password,
            passwordConfirmation: this.step3Data.passwordConfirmation,
            isActive: this.step3Data.isActive,
            mandat: this.step3Data.mandat,
            nom: this.step3Data.nom,
            prenom:this.step3Data.prenom,
            prospect: this.step3Data.prospect,
            telephone:this.step3Data.telephone,
            adresse: this.step3Data.adresse,
            note: this.step3Data.note,
            document: this.step3Data.document,
            bien :this.step3Data.bien,
            rdv:[{}]
          };
          this.step4Started.rdv.splice(-1, 1);

      }
      if (params.back){
        this.step3Data = JSON.parse(params.back);
        console.log('step4 back', this.step3Data)
        for (let i = 0; i < this.step3Data.rdv.length; i++) {
          this.step3Data.rdv[i].startedDate = new Date(this.step3Data.rdv[i].startedDate);
          this.step3Data.rdv[i].endDate = new Date(this.step3Data.rdv[i].endDate);
        }

        this.step4Started = {
          email: this.step3Data.email,
          password: this.step3Data.password,
          passwordConfirmation: this.step3Data.passwordConfirmation,
          isActive: this.step3Data.isActive,
          mandat: this.step3Data.mandat,
          nom: this.step3Data.nom,
          prenom:this.step3Data.prenom,
          prospect: this.step3Data.prospect,
          telephone:this.step3Data.telephone,
          adresse: this.step3Data.adresse,
          note: this.step3Data.note,
          document: this.step3Data.document,
          bien :this.step3Data.bien,
          rdv:this.step3Data.rdv,
        };
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


// Ajout D'un rdv
addRdv(){
  const newRdv ={
    titre:'',
    description:'',
    startedDate: new Date(),
    endDate: new Date()
  }
  this.step4Started.rdv.push(newRdv);
}

removeColumn() {
    this.step4Started.rdv.splice(-1, 1);
}



  nextPage() {
    console.log('step4End', this.step4Started)
    this.router.navigate(['step5/confirmation'], { queryParams:{ filter: JSON.stringify(this.step4Started)}, skipLocationChange: true });
    this.submitted = true;
  }

  /**
   * Page précédente
   */
  prevPage() {
    this.router.navigate(['step3/bien'], { queryParams: { back: JSON.stringify(this.step4Started)}, skipLocationChange: true });
    this.submitted = false;

  };

}
