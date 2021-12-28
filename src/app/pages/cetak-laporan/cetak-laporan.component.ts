import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cetak-laporan',
  templateUrl: './cetak-laporan.component.html',
  styleUrls: ['./cetak-laporan.component.css']
})
export class CetakLaporanComponent implements OnInit {

  tableLaporan = [
    {id: 'jdskf2389', time: '6/12/2021', kasir: 'budi', total: '40000', jenisPembayaran: 'Non-Tunai', customer: 'member'},
    {id: 'dajl98dsf', time: '7/12/2021', kasir: 'ahmad', total: '40000', jenisPembayaran: 'Tunai', customer: 'Non-member'},
    {id: 'adjl99shd', time: '8/12/2021', kasir: 'kafi', total: '40000', jenisPembayaran: 'Non-Tunai', customer: 'member'},
    {id: 'sdha898sd', time: '8/12/2021', kasir: 'nugroho', total: '40000', jenisPembayaran: 'Tunai', customer: 'member'},
    {id: 'adjk89s8s', time: '10/12/2021', kasir: 'alby', total: '40000', jenisPembayaran: 'Tunai', customer: 'Non-member'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
