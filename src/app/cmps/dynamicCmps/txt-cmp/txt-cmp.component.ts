import { Component, Input } from '@angular/core';
import { Cmp } from '../../../models/website.model';

@Component({
  selector: 'txt-cmp',
  standalone: true,
  imports: [],
  templateUrl: './txt-cmp.component.html',
  styleUrl: './txt-cmp.component.scss'
})
export class TxtCmpComponent {
  @Input() cmp!:Cmp 
}
