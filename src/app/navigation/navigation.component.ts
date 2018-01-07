import { Component, OnInit } from '@angular/core';
import 'materialize-css';

declare var M: any;


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  instanceTab;

  constructor() { }

  ngOnInit() {
    const instanceSidenav = new M.Sidenav(document.querySelector('.sidenav'));
    this.instanceTab = new M.Tabs(document.querySelector('#p-tabsmain'));
    const instanceButton = new M.FloatingActionButton(document.querySelector('.fixed-action-btn'), {
      hoverEnabled: false
    });
  }

  /* Lets the sidenav links work */
  selectTab(tab: string) {
    this.instanceTab.select(tab);
  }


}
