import {Component, OnInit} from '@angular/core';
import 'materialize-css';

declare var M: any;

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {


  chartData = {
    chartType: 'LineChart',
    localeId: 'es',
    dataTable: [
      ['Fecha', 'Saldo'],
      [new Date(2018, 0, 1), 5000], [new Date(2018, 0, 2), 3000], [new Date(2018, 0, 3), 5000],
      [new Date(2018, 0, 4), 1000], [new Date(2018, 0, 5), 3000], [new Date(2018, 0, 6), 4000],
      [new Date(2018, 0, 7), 4000], [new Date(2018, 0, 8), 5000], [new Date(2018, 0, 9), 6000],
      [new Date(2018, 0, 10), 5000], [new Date(2018, 0, 11), 8000], [new Date(2018, 0, 12), 6000],
      [new Date(2018, 0, 13), 6000], [new Date(2018, 0, 14), 6000], [new Date(2018, 0, 15), 6000],
      [new Date(2018, 0, 16), 6000], [new Date(2018, 0, 17), 6000], [new Date(2018, 0, 18), 6000],
      [new Date(2018, 0, 19), 3000], [new Date(2018, 0, 20), 1000], [new Date(2018, 0, 21), 2000],
      [new Date(2018, 0, 22), 4000], [new Date(2018, 0, 23), 6000], [new Date(2018, 0, 24), 5000],
      [new Date(2018, 0, 25), 9000], [new Date(2018, 0, 26), 4000], [new Date(2018, 0, 27), 9000],
      [new Date(2018, 0, 28), 8000], [new Date(2018, 0, 29), 6000], [new Date(2018, 0, 30), 4000],
      [new Date(2018, 0, 31), 6000], [new Date(2018, 1, 1), 7], [new Date(2018, 1, 2), 9000]


    ], formatters: [
      {
        columns: [0],
        type: 'DateFormat',
        options: {
          formatType: 'long'
        }
      }
    ],
    options: {
      hAxis: {
        title: 'Últimos 30 días',
        titleTextStyle: {color: '#333'},

      },
      vAxis: {
        viewWindow: {
          min: 0
        }
      },
      curveType: 'function',
      legend: 'none',
      colors: ['#3e95cd'],
      lineWidth: 3,
      animation: {
        startup: true,
        duration: 1500,
        easing: 'out',
      },
      chartArea: {left: '10%', width: '90%'}
    }
  };


  constructor() {
  }

  ngOnInit() {
    const instance = M.Collapsible.init(document.querySelector('.collapsible'));
  }


}
