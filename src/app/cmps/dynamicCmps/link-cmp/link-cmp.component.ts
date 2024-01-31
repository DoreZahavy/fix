import { Component, Input } from '@angular/core';
import { Cmp } from '../../../models/website.model';

@Component({
  selector: 'link-cmp',
  standalone: true,
  imports: [],
  templateUrl: './link-cmp.component.html',
  styleUrl: './link-cmp.component.scss'
})
export class LinkCmpComponent {
  @Input() cmp!:Cmp 
}
