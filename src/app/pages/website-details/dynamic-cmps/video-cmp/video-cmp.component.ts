import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'video-cmp',
  standalone: true,
  imports: [],
  templateUrl: './video-cmp.component.html',
  styleUrl: './video-cmp.component.scss'
})
export class VideoCmpComponent {
  @Input() cmp!:Cmp 
}
