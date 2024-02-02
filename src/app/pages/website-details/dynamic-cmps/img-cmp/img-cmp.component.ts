import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'img-cmp',
  standalone: true,
  imports: [],
  templateUrl: './img-cmp.component.html',
  styleUrl: './img-cmp.component.scss'
})
export class ImgCmpComponent {
@Input() cmp!:Cmp 
}
