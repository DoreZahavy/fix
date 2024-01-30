import { Pipe, PipeTransform, inject } from '@angular/core';
import { WebsiteRoute } from '../models/website.model';
import { Router } from '@angular/router';

@Pipe({
  name: 'findRoute',
  standalone: true
})
export class FindRoutePipe implements PipeTransform {

  transform(routes: WebsiteRoute[], urlName: string, routeName: string): WebsiteRoute {
    const route = routes.find(route => route.urlName === routeName);
    if (route) return route
    else {
      inject(Router).navigate(['/', urlName, routeName])
      // return new WebsiteRoute;
      throw new Error('Route not found');
    }
  }

}
