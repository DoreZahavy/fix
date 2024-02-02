import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-map',
  standalone: true,
  imports: [],
  templateUrl: './editable-map.component.html',
  styleUrl: './editable-map.component.scss'
})
export class EditableMapComponent {
  @Input() cmp!:Cmp 
}
