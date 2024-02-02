import { Component, Input } from '@angular/core';
import { Column } from '../../../models/website.model';

@Component({
  selector: 'editable-column',
  standalone: true,
  imports: [],
  templateUrl: './editable-column.component.html',
  styleUrl: './editable-column.component.scss'
})
export class EditableColumnComponent {
@Input() column! : Column
}
