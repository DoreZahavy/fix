import { Component } from '@angular/core';
import { EditableTxtComponent } from '../editable-cmps/editable-txt/editable-txt.component';
import { CdkDrag, CdkDragDrop, CdkDragMove, DragDropModule,CdkDragExit } from '@angular/cdk/drag-drop';
import { Cmp } from '../../../models/website.model';

@Component({
  selector: 'elements-menu',
  standalone: true,
  imports: [EditableTxtComponent,DragDropModule,CdkDrag],
  templateUrl: './elements-menu.component.html',
  styleUrl: './elements-menu.component.scss'
})
export class ElementsMenuComponent {
  templates :Cmp[] = [
    { _id: '123', type: 'txt', info: { txt: 'sample drag' }, style: {} },
    { _id: '12erg3', type: 'txt', info: { txt: 'sample drag2' }, style: {} },
    { _id: '12g3', type: 'txt', info: { txt: 'sample drag3' }, style: {} }
  ]
 

  predicate() {
    return false;
  }
}
