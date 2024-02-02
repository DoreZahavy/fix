import { Component, Input } from '@angular/core';
import { WebsiteRoute } from '../../../models/website.model';
import { EditableContainerComponent } from '../editable-container/editable-container.component';

@Component({
  selector: 'editable-route',
  standalone: true,
  imports: [EditableContainerComponent],
  templateUrl: './editable-route.component.html',
  styleUrl: './editable-route.component.scss'
})
export class EditableRouteComponent {
@Input() route!: WebsiteRoute
}
