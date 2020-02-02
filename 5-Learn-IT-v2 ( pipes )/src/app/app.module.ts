import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { PriceDiscountPipe } from './price-discount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CartBadgeComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
