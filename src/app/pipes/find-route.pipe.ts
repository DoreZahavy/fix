import { Pipe, PipeTransform, inject } from '@angular/core';
import { Website, WebsiteRoute } from '../models/website.model';
import { Router } from '@angular/router';

@Pipe({
  name: 'findRoute',
  standalone: true
})
export class FindRoutePipe implements PipeTransform {
  constructor(private router: Router) { }

  transform(routes: WebsiteRoute[], routeName: string): WebsiteRoute {
    const route = routes.find(route => route.urlName === routeName);
    // return route
    if (route) return route
    // else {
    // return website.routes.find(route => route.urlName === website.defaultRoute)
    //   this.router.navigate([ website.urlName, website.defaultRoute])
    else throw new Error('Route not found');
    // }
  }

}
