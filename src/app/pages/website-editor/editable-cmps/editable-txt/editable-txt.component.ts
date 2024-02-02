import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-txt',
  standalone: true,
  imports: [],
  templateUrl: './editable-txt.component.html',
  styleUrl: './editable-txt.component.scss'
})
export class EditableTxtComponent {
  @Input() cmp!:Cmp 
}
