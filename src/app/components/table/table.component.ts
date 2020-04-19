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
  {returnType: 'Total Return (%)', ytd: 10, oneMonth: 10, threeMonths: 10, oneYear: 10, threeYears: 10, fiveYears: 10, tenYears:10, inception: 10},
  {returnType: 'Benchmark (%)', ytd: 10, oneMonth: 10, threeMonths: 10, oneYear: 10, threeYears: 10, fiveYears: 10, tenYears:10, inception: 10},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['returnType', 'ytd', 'oneMonth', 'threeMonths', 'oneYear', 'threeYears', 'fiveYears', 'tenYears', 'inception'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
