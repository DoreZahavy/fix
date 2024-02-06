import { Component, EventEmitter, Output, inject } from '@angular/core';
import { GetSvgDirective } from '../../../directives/get-svg.directive';

@Component({
  selector: 'editor-header',
  standalone: true,
  imports: [GetSvgDirective],
  templateUrl: './editor-header.component.html',
  styleUrl: './editor-header.component.scss'
})
export class EditorHeaderComponent {
  @Output() save = new EventEmitter<MouseEvent>()

}
