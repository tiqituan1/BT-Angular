import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductsComponent } from './detailproducts/detailproducts.component';
import { GiohangComponent } from './giohang/giohang.component';
import { FormComponent } from './form/form.component';
import { from } from 'rxjs';
import { FormThuongtetComponent } from './form-thuongtet/form-thuongtet.component';
import { HttpClientModule } from "@angular/common/http";
import { StudentsComponent } from './students/students.component';
import { HttpComponent } from './http/http.component';
import { GuitarComponent } from './guitar/guitar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductsComponent,
    GiohangComponent,
    FormComponent,
    FormThuongtetComponent,

    StudentsComponent,

    HttpComponent,

    // ProjectComponent,

    GuitarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: ProductsComponent },
        { path: 'form', component: FormComponent },
        { path: 'thuongtet', component: FormThuongtetComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'carts', component: GiohangComponent },
        { path: 'products/:productId', component: DetailproductsComponent },
        { path: '', redirectTo: 'products', pathMatch: 'full' },
        { path: 'students', component: StudentsComponent },
        { path: 'http', component: HttpComponent },
        { path: 'guitar', component: GuitarComponent }
      ]
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
