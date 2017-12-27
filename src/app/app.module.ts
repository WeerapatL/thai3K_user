import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CategoryComponent,
    ProductDetailComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',component:HomepageComponent
      },
      {
        path: 'Home',component:HomepageComponent
      },
      {
        path: 'Contact', component: ContactComponent
      },
      {
        path: 'Category', component: CategoryComponent
      },
      {
        path: 'ProductDetail', component: ProductDetailComponent
      }
    ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
