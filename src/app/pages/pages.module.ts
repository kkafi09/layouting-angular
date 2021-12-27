import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {ChartsModule} from 'ng2-charts';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductComponent} from './product/product.component';
import {KasirComponent} from './kasir/kasir.component';
import {CetakLaporanComponent} from './cetak-laporan/cetak-laporan.component';
import {LaporanComponent} from './laporan/laporan.component';
import {TransaksiComponent} from './transaksi/transaksi.component';


@NgModule({
  declarations: [DashboardComponent, ProductComponent, KasirComponent, CetakLaporanComponent, LaporanComponent, TransaksiComponent],
  imports: [
    CommonModule,
    ChartsModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {
}
