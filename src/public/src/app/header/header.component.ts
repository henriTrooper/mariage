
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { SidebarGlobalService } from '../sidebar-global/sidebar-global.service';

import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: SocialUser;

  items: MenuItem[];

  displayBasic2: boolean;

  constructor(public auth: AuthService, private socialAuthService: SocialAuthService, public sidebarGlobalService: SidebarGlobalService, ) { }


  ngOnInit() {
    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
    });

    this.items = [
      {
        label:'Accueil',
        routerLink: '/',
        styleClass: 'menucus2'

    },
      {
          label:'Services',
          styleClass: 'menucus2',
          items:[
              {
                  label:'Visite Virtuel',
                  routerLink: '/virtuel',
              },
              {
                  label:'Conciergerie',
                  routerLink: '/conciergerie',
                  items:[
                    {
                        label:'Traditionel',
                        
                    },
                    {
                        label:'Sous location',
                    }
                    ]
              },
              {
                  label:'Immoblier 3D',
                  routerLink: '/immobilier',
                  items:[
                    {
                        label:'Achat',
                        
                    },
                    {
                        label:'Re-vente',
                    },
                    {
                      label:'Investisseur',
                  }
                    ]
              },
              {
                label:'Home Staging',
                routerLink: '/homestaging'
            }
          ]
      },
      
      {
          label:'A propos',
          styleClass: 'menucus2',
          routerLink: '/about'
      },
      {
        label:'Mon espace',
        routerLink: '/auth/login',
        styleClass: 'menucus2'

    },
      {
          label:'Contact',
          routerLink: '/contact',
          styleClass: 'menucus2'

      },
      
  ];

   /*  this.items = [
      {
         label:'Contact',
         icon:'fa fa-paper-plane',
         routerLink: '/contact'
      },
      {
         label:'Prendre RDV',
         icon:'fa fa-calendar',
         command: e => this.displayBasic2 = true
      },
      {
         label:'Facebook',
         icon:'fa fa-facebook',
         url:'https://www.facebook.com',
         target: "_blank"
        
      },
      {
         label:'Instagram',
         icon:'fa fa-instagram',
         url:'https://www.instagram.com',
         target: "_blank"
      },
  ]; */

  }

   // Open/close nav
   toggleSidebar(): void {
    this.sidebarGlobalService.setSidebarState(!this.sidebarGlobalService.getSidebarState());
  }

  mytoggle(){
    document.getElementById("sidebar").classList.toggle('active');
		}

  // logout session
  logout(): void {
    this.auth.logout(this.user);
    document.querySelector('#bodySidebar').setAttribute('style', 'visibility:hidden');
    document.querySelector('.btnSidebar').setAttribute('style', 'visibility:hidden;')
  }


}