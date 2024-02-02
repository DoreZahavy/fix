import { Component, Input } from '@angular/core';
import { Container } from '../../../models/website.model';
import { EditableColumnComponent } from '../editable-column/editable-column.component';

@Component({
  selector: 'editable-container',
  standalone: true,
  imports: [EditableColumnComponent],
  templateUrl: './editable-container.component.html',
  styleUrl: './editable-container.component.scss'
})
export class EditableContainerComponent {
  @Input() container!: Container

}
