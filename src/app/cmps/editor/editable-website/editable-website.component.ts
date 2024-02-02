import { Component, Input } from '@angular/core';
import { Website } from '../../../models/website.model';
import { EditableContainerComponent } from '../editable-container/editable-container.component';
import { FindRoutePipe } from '../../../pipes/find-route.pipe';
import { EditableRouteComponent } from '../editable-route/editable-route.component';

@Component({
  selector: 'editable-website',
  standalone: true,
  imports: [EditableWebsiteComponent,EditableContainerComponent,FindRoutePipe,EditableRouteComponent],
  templateUrl: './editable-website.component.html',
  styleUrl: './editable-website.component.scss'
})
export class EditableWebsiteComponent {
  @Input() website!: Website
  @Input() routeName!: string
}
