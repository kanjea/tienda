import { Component, OnInit } from '@angular/core';
import 'materialize-css';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  instanceTab;

  constructor() { }

  ngOnInit() {
    this.instanceTab = M.Tabs.getInstance(document.querySelector('#p-tabsmain'));
    const instanceSidenav = new M.Sidenav(document.querySelector('.sidenav'));
  }

  /* Lets the sidenav links work */
  selectTab(tab: string) {
    this.instanceTab.select(tab);
  }


}
