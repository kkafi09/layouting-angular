import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KasirComponent} from './kasir/kasir.component';
import {ProductComponent} from './product/product.component';
import {TransaksiComponent} from './transaksi/transaksi.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'kasir', component: KasirComponent},
  {path: 'transaksi', component: TransaksiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
