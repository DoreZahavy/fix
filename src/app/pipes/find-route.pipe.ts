import { Pipe, PipeTransform, inject } from '@angular/core';
import { Website, WebsiteRoute } from '../models/website.model';
import { Router } from '@angular/router';

@Pipe({
  name: 'findRoute',
  standalone: true
})
export class FindRoutePipe implements PipeTransform {
  constructor( private router : Router){}

  transform(website: Website, routeName: string): WebsiteRoute {
    const route = website.routes.find(route => route.urlName === routeName);
    if (route) return route
    else {
      this.router.navigate([ website.urlName, website.defaultRoute])
      // return new WebsiteRoute;
      throw new Error('Route not found');
    }
  }

}
