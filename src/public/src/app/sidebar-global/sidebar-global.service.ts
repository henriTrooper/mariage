import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarGlobalService {
  toggled = true;
  menus = [
    {
      title: 'General',
      type: 'header',
      global: 'global'
    },
    {
      global: 'global',
      title: 'Accueil',
      icon: 'fa fa-home fa-2x',
      active: false,
    },
    {
      global: 'global',
      title: 'Conciergerie',
      icon: 'fa fa-handshake-o fa-2x',
      active: false,
    },
    {
      global: 'global',
      title: 'Immobilier 3D',
      icon: 'fa fa-university fa-2x',
      active: false,
    },
    {
      global: 'global',
      title: 'Contact',
      icon: 'fa fa-paper-plane fa-2x',
      active: false,
      href: "/contact"
    },
    {
      global: 'global',
      title: 'Mon espace',
      icon: 'fa fa-user-o fa-2x',
      active: false,
      href: "/auth/login"
    },
    {
      user: 'admin',
      title: 'Mon compte',
      type: 'header'
    },
    {
      user: 'admin',
      title: 'Nouveau Client',
      icon: 'fa fa-user-o fa-2x',
      active: false,
      href: "/newClient"
    },
    {
      user: 'admin',
      title: 'Clients',
      icon: 'fa fa-user-o fa-2x',
      active: false,
      href: "/findAllUser"
    },
    {
      user: 'admin',
      title: 'Calendrier',
      icon: 'fa fa-calendar-check-o fa-2x',
      active: false,
      href: "/"
    },
    {
      user: 'admin',
      title: 'Dashboard',
      icon: 'fa fa-bar-chart fa-7x',
      active: false,
      href: "/"
    },
    
    {
      user: 'user',
      title: 'Mon compte',
      type: 'header'
    },
    {
      user: 'user',
      title: 'Prendre RDV',
      icon: 'fa fa-calendar-check-o fa-2x',
      active: false,
      href: "/"
    },
    {
      user: 'user',
      title: 'Mes Documents',
      icon: 'fa fa-file-text-o fa-2x',
      active: false,
      href: "/"
    },
  ];
  constructor() { }

  toggle(): void {
    this.toggled = ! this.toggled;
  }

  getSidebarState(): boolean {
    return this.toggled;
  }

  setSidebarState(state: boolean): void {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

}

