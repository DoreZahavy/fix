import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs';
import { WebsiteService } from '../../services/website.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { ContainerComponent } from '../../cmps/container/container.component';
import { WebsiteRouteComponent } from '../../cmps/website-route/website-route.component';
import { FindRoutePipe } from '../../pipes/find-route.pipe';

@Component({
  selector: 'website-details',
  standalone: true,
  imports: [CommonModule,ContainerComponent,WebsiteRouteComponent,FindRoutePipe],
  templateUrl: './website-details.component.html',
  styleUrl: './website-details.component.scss'
})
export class WebsiteDetailsComponent implements OnInit {
  // router = inject(Router)
  websiteService = inject(WebsiteService)
  activatedRoute = inject(ActivatedRoute)
  website = this.websiteService.website
  routeName = ''
  ngOnInit(): void {
    // this.router.routerState.snapshot.
    this.activatedRoute.params.pipe(
      // take(1),
      tap(params => {
        if(params['route']) this.routeName = params['route']
      console.log('params.route',this.routeName)}),
      map(params => params['name']),
      switchMap(name => this.websiteService.getByName(name))
    ).subscribe({
      next: website => console.log('website fetched:', website.name),
      error: err => console.log('err:', err)
    })
  }
}
