import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<any>{

  constructor(private courseService: CourseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let course_id=route.paramMap.get("course_id")
    return this.courseService.get(course_id)
  }

}
