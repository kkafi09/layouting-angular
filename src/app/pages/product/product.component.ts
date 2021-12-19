import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  tableProduct = [
    {id: 1, name: 'Ayam goreng', category: 'Makanan', price: '20.000'},
    {id: 2, name: 'Nasi goreng', category: 'Makanan', price: '20.000'},
    {id: 5, name: 'Kopi', category: 'Minuman', price: '20.000'},
    {id: 3, name: 'Es Jeruk', category: 'Minuman', price: '20.000'},
    {id: 4, name: 'Teh', category: 'Minuman', price: '20.000'}
  ];

  displayStyle = 'none';

  ngOnInit(): void {
    console.log(this.tableProduct);

  }

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}
