import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'nav-bar-cmp',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-cmp.component.html',
  styleUrl: './nav-bar-cmp.component.scss'
})
export class NavBarCmpComponent {
  @Input() cmp!:Cmp 
}
