import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [DashboardComponent, ProductComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
