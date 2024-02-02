import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-img',
  standalone: true,
  imports: [],
  templateUrl: './editable-img.component.html',
  styleUrl: './editable-img.component.scss'
})
export class EditableImgComponent {
  @Input() cmp!:Cmp 
}
