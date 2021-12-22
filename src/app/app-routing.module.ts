import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginwidthComponent} from './auth/loginwidth/loginwidth.component';
import {ForgotpasswordComponent} from './auth/forgotpassword/forgotpassword.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ProductComponent} from './pages/product/product.component';
import {KasirComponent} from './pages/kasir/kasir.component';
import {TransaksiComponent} from './pages/transaksi/transaksi.component';
import {LaporanComponent} from './pages/laporan/laporan.component';
import {CetakLaporanComponent} from './pages/cetak-laporan/cetak-laporan.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'login-width', component: LoginwidthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot', component: ForgotpasswordComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product', component: ProductComponent},
  {path: 'kasir', component: KasirComponent},
  {path: 'transaksi', component: TransaksiComponent},
  {path: 'laporan', component: LaporanComponent},
  {path: 'cetak-laporan', component: CetakLaporanComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
