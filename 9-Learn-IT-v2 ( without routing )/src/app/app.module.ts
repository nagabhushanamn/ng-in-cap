import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { CartViewComponent } from './cart-view/cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CartBadgeComponent,
    PriceDiscountPipe,
    ReviewComponent,
    ReviewFormComponent,
    CartViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
