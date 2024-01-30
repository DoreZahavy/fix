import { Component, Input } from '@angular/core';
import { WebsiteRoute } from '../../models/website.model';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'website-route',
  standalone: true,
  imports: [CommonModule,ContainerComponent],
  templateUrl: './website-route.component.html',
  styleUrl: './website-route.component.scss'
})
export class WebsiteRouteComponent {
  @Input() 'route' :WebsiteRoute

}
