import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cmp, Container } from '../../../models/website.model';
import { EditableColumnComponent } from '../editable-column/editable-column.component';
import { CdkDrag, CdkDragDrop, DragDropModule, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'editable-container',
  standalone: true,
  imports: [EditableColumnComponent, DragDropModule],
  templateUrl: './editable-container.component.html',
  styleUrl: './editable-container.component.scss'
})
export class EditableContainerComponent {
  @Input() container!: Container
  @Output() dropCmp = new EventEmitter()

  onDropCmp(ev: CdkDragDrop<Cmp[]>) {
    console.log(ev)
    if (ev.previousContainer === ev.container) {
      console.log('same container')
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);
    } else if (ev.previousContainer.id === 'elements') {
      console.log('elements')
      copyArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex,
      )
    } else {
      console.log('different container');
      transferArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex,
      );

    }

  }
  elementPredicate(item : CdkDrag<any>){
    return item.data['type'] !== 'container';
  }
}


