import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {PagesRoutingModule} from './pages-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductComponent} from './product/product.component';
import {ChartsModule} from 'ng2-charts';
import {RouterModule} from '@angular/router';
import {KasirComponent} from './kasir/kasir.component';
import {TransaksiComponent} from './transaksi/transaksi.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, ProductComponent, KasirComponent, TransaksiComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ChartsModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {
}
