import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KasirComponent} from './kasir/kasir.component';
import {ProductComponent} from './product/product.component';
import {TransaksiComponent} from './transaksi/transaksi.component';
import {LaporanComponent} from './laporan/laporan.component';
import {CetakLaporanComponent} from './cetak-laporan/cetak-laporan.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children : [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: ProductComponent,
    children : [
      {
        path: 'product',
        component: ProductComponent
      }
    ]
  },
  {
    path: '',
    component: KasirComponent,
    children : [
      {
        path: 'kasir',
        component: KasirComponent
      }
    ]
  },
  {
    path: '',
    component: TransaksiComponent,
    children : [
      {
        path: 'transaksi',
        component: TransaksiComponent
      }
    ]
  },
  {
    path: '',
    component: LaporanComponent,
    children : [
      {
        path: 'laporan',
        component: LaporanComponent
      }
    ]
  },
  {
    path: '',
    component: CetakLaporanComponent,
    children : [
      {
        path: 'cetak-laporan',
        component: CetakLaporanComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
