import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { KasirComponent } from './kasir/kasir.component';
import { TransaksiComponent } from './transaksi/transaksi.component';



@NgModule({
  declarations: [DashboardComponent, ProductComponent, KasirComponent, TransaksiComponent],
  imports: [
    CommonModule,
    ChartsModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
