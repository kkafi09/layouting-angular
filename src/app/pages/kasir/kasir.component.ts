import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.css']
})
export class KasirComponent implements OnInit {
  tableKasir = [
    {id: 1, name: 'Ayam goreng', price: '20000', qty: '2', discount: '0', total: '40000'},
    {id: 2, name: 'Nasi goreng', price: '20000', qty: '2', discount: '0', total: '40000'},
    {id: 5, name: 'Kopi', price: '20000', qty: '2', discount: '0', total: '40000'},
    {id: 3, name: 'Es Jeruk', price: '20000', qty: '2', discount: '0', total: '40000'},
    {id: 4, name: 'Teh', price: '20000', qty: '2', discount: '0', total: '40000'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
