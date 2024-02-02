import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'icon-bar-cmp',
  standalone: true,
  imports: [],
  templateUrl: './icon-bar-cmp.component.html',
  styleUrl: './icon-bar-cmp.component.scss'
})
export class IconBarCmpComponent {
  @Input() cmp!:Cmp
}
