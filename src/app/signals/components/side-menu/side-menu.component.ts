import { Component, signal } from '@angular/core';

interface MenuItem {
  name: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  //! Manera tradicional
  /* public menuRouter: MenuItem[] = [
    { name: 'counter', router: './counter' },
    { name: 'user info',router: './user-info' },
    { name: 'properties', router: './properties' }
  ] */

  //! como signals
  public menuRouter = signal<MenuItem[]>([
    { name: 'counter', router: './counter' },
    { name: 'user info',router: './user-info' },
    { name: 'properties', router: './properties' }
  ]);

}
