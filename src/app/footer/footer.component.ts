import { Component, OnInit } from '@angular/core';
import 'materialize-css';

declare var M: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  instanceTab;

  constructor() {

  }

  ngOnInit() {
    this.instanceTab = new M.Tabs(document.querySelector('#p-tabsmain'));
    const instanceButton = new M.FloatingActionButton(document.querySelector('.fixed-action-btn'), {
      hoverEnabled: false
    });
  }



}
