import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';

@Component({
  selector: 'editable-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './editable-nav-bar.component.html',
  styleUrl: './editable-nav-bar.component.scss'
})
export class EditableNavBarComponent {
  @Input() cmp!:Cmp
}
