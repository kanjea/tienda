import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store';
import { STORES } from '../mock-stores';
import 'materialize-css';
declare var M: any;

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  constructor() { }
  stores = STORES;
  instanceTab;
  ngOnInit() {

    this.instanceTab = new M.Tabs(document.querySelector('#p-tabscategory'));

  }

}
