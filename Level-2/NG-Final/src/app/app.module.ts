import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterBoxComponent } from './counter-box/counter-box.component';
import { ActionComponent } from './action/action.component';
import { SummaryComponent } from './summary/summary.component';
import { GreetComponent } from './greet/greet.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TodoComponent } from './todo/todo.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';
import { TodoCountComponent } from './todo-count/todo-count.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterBoxComponent,
    ActionComponent,
    SummaryComponent,
    GreetComponent,
    ProgressBarComponent,
    TodoComponent,
    TodoBoxComponent,
    TodoCountComponent,
    NavbarComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
