import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() icon: string;

  statData = [{
      color: 'blue',
      title: 'Total Penjualan Bulan ini',
      value: '1,235',
  }, {
      color: 'red',
      title: 'Total Penjualan Hari ini',
      value: '234',
  }, {
      color: 'green',
      title: 'Total Item Tejual',
      value: 'Makanan (25)',
      value1: 'Minuman (35)'
  }, {
      color: 'yellow',
      title: 'Best Seller',
      value: 'Ayam Geprek (20)',
      value1: 'Kopi Susu(10)'
  }
  ];
  constructor() {

  }

  ngOnInit(): void {
  }
}
