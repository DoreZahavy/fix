import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-form',
  standalone: true,
  imports: [],
  templateUrl: './editable-form.component.html',
  styleUrl: './editable-form.component.scss'
})
export class EditableFormComponent {
  @Input() cmp!:Cmp 
}
