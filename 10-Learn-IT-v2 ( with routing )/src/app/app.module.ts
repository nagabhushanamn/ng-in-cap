import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'cart', component: CartViewComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseComponent,
    CartBadgeComponent,
    PriceDiscountPipe,
    ReviewComponent,
    ReviewFormComponent,
    CartViewComponent,
    DashboardComponent,
    CourseListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
