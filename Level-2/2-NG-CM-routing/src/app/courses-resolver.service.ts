import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolverService implements Resolve<any>{

  constructor(private courseService: CourseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.courseService.getAll()
  }

}
