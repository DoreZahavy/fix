import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-video',
  standalone: true,
  imports: [],
  templateUrl: './editable-video.component.html',
  styleUrl: './editable-video.component.scss'
})
export class EditableVideoComponent {
  @Input() cmp!:Cmp 
}
