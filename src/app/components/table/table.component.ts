import { Component, OnInit } from '@angular/core';

export interface Performance {
  returnType: string;
  ytd: number;
  oneMonth: number;
  threeMonths: number;
  oneYear: number;
  threeYears: number;
  fiveYears: number;
  tenYears: number;
  inception: number;
}

const ELEMENT_DATA: Performance[] = [
  // tslint:disable-next-line:max-line-length
  {returnType: 'Total Return (%) as of April 13, 2020', ytd: 10, oneMonth: 10, threeMonths: 10, oneYear: 10, threeYears: 10, fiveYears: 10, tenYears: 10, inception: 31.10},
  // tslint:disable-next-line:max-line-length
  {returnType: 'Benchmark (%) as of April 13 2020', ytd: 10, oneMonth: 10, threeMonths: 10, oneYear: 10, threeYears: 10, fiveYears: 10, tenYears: 10, inception: 10},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['returnType', 'ytd', 'oneMonth', 'threeMonths', 'oneYear', 'threeYears', 'fiveYears', 'tenYears', 'inception'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
