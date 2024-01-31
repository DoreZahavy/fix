import { Component, Input } from '@angular/core';
import { Cmp } from '../../../models/website.model';

@Component({
  selector: 'icon-cmp',
  standalone: true,
  imports: [],
  templateUrl: './icon-cmp.component.html',
  styleUrl: './icon-cmp.component.scss'
})
export class IconCmpComponent {
  @Input() cmp!:Cmp 
}
