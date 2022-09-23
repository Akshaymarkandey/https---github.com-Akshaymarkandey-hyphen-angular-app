import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { PaymentComponent } from './payment-details/payment-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'update-product/:id', component: UpdateProductComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path: 'payment-details/:id', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
