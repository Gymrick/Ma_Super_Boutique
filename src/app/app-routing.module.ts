import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'add-product', component: AddProductComponent },
  { path: 'product', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
