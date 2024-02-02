import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'map-cmp',
  standalone: true,
  imports: [],
  templateUrl: './map-cmp.component.html',
  styleUrl: './map-cmp.component.scss'
})
export class MapCmpComponent {
@Input() cmp!: Cmp
}
