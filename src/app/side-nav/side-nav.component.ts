import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Dashboard',
            icon: 'dashboard-icon',
            routerLink: ['/dashboard']
          },
        ]
      },
      {
        label: 'Manajemen Ajudan',
        items: [
          {
            label: 'Agent',
            icon: 'agent',
            routerLink: ['/agent']
          }
        ]
      }
    ];
  }
}
