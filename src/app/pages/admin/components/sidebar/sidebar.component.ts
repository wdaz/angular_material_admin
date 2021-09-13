import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Menu } from '@app/models/frontend/menu/Menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() mobileQuery!: MediaQueryList;
  events: string[] = [];
  opened: boolean;
  closed: boolean;
  menus: Menu[];

  constructor() {
    this.opened = true;
    this.closed = false;
    this.menus = [
      {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: 'dashboard',
      },
      {
        name: 'User',
        path: '/admin/user',
        icon: 'person',
      },
      {
        name: 'Table list',
        path: 'table-list',
        icon: 'content_paste',
      },
    ];
  }

  ngOnInit(): void {}

  toggle() {
    this.sidenav.toggle();
  }

  showInfo() {}
}
