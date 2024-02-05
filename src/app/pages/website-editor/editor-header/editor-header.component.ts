import { Component, inject } from '@angular/core';
import { GetSvgDirective } from '../../../directives/get-svg.directive';

@Component({
  selector: 'editor-header',
  standalone: true,
  imports: [GetSvgDirective],
  templateUrl: './editor-header.component.html',
  styleUrl: './editor-header.component.scss'
})
export class EditorHeaderComponent {

}
