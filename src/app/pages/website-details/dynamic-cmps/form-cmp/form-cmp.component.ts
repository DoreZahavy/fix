import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'form-cmp',
  standalone: true,
  imports: [],
  templateUrl: './form-cmp.component.html',
  styleUrl: './form-cmp.component.scss'
})
export class FormCmpComponent {
  @Input() cmp!:Cmp 
}
