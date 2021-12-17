import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() color: string;
  @Input() title: string;
  @Input() value: string;

  statData:any = [{
      title: 'Total Penjualan Bulan ini',
      value: '1,235',
  }, {
      title: 'Total Penjualan Hari ini',
      value: '234',
  }, {
      title: 'Total Item Tejual',
      value: 'Makanan (25)',
      value1: 'Minuman (35)'
  }, {
      title: 'Best Seller',
      value: 'Ayam Geprek (20)',
      value1: 'Kopi Susu(10)'
  }
  ];
  constructor() {
    console.log(this.statData)
  }

  ngOnInit(): void {
  }
}
