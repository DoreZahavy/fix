import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Website } from '../../../models/website.model';
import { EditableContainerComponent } from '../editable-container/editable-container.component';
import { FindRoutePipe } from '../../../pipes/find-route.pipe';
import { EditableRouteComponent } from '../editable-route/editable-route.component';
import { CdkDropListGroup, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'editable-website',
  standalone: true,
  imports: [EditableWebsiteComponent, EditableContainerComponent, FindRoutePipe, EditableRouteComponent, CdkDropListGroup, DragDropModule],
  templateUrl: './editable-website.component.html',
  styleUrl: './editable-website.component.scss'
})
export class EditableWebsiteComponent {
  @Input() website!: Website
  @Input() routeName!: string
  @Input() dragType!: string
  @Output() dropCmp = new EventEmitter()
  @Output() dropContainer = new EventEmitter()
}
