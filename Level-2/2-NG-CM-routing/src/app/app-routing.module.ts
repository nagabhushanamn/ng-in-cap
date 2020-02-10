import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesResolverService } from './courses-resolver.service';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseResolverService } from './course-resolver.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { StateCheckService } from './state-check.service';
import { ChildGuardService } from './child-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'new',
    component: CourseFormComponent,
    canActivate: [AuthService],
    canDeactivate: [StateCheckService]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'all',
    component: CourseListComponent,
    resolve: {
      courses: CoursesResolverService,
    },
    data: {
      trainer: "Nag"
    },
    canActivateChild:[ChildGuardService],
    children: [
      { path: 'view/:course_id', component: CourseViewComponent },
      {
        path: 'edit/:course_id',
        component: CourseFormComponent,
        resolve: {
          course: CourseResolverService
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
