import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MenubarModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mySpaceInteriors';
  public menuOpen = false;
  public logo = 'MySpace Interiors';
  public menuItems = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Gallery', icon: 'pi pi-images', routerLink: '/gallery' },
    { label: 'Contact Us', icon: 'pi pi-envelope', routerLink: '/contact' }
  ];
}
