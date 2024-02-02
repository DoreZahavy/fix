import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-icon-bar',
  standalone: true,
  imports: [],
  templateUrl: './editable-icon-bar.component.html',
  styleUrl: './editable-icon-bar.component.scss'
})
export class EditableIconBarComponent {
  @Input() cmp!:Cmp 
}
