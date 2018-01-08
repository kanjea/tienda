import { Component, OnInit } from '@angular/core';
import 'materialize-css';

declare var M: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    const instanceSidenav = new M.Sidenav(document.querySelector('.sidenav'));
  }



}
