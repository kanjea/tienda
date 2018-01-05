import { Component, OnInit } from '@angular/core';
import 'materialize-css';
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  instanceTab;
  ngOnInit() {

    this.instanceTab = new M.Tabs(document.querySelector('#p-tabscategory'));
  }

}
