import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container, WebsiteRoute } from '../../../models/website.model';
import { EditableContainerComponent } from '../editable-container/editable-container.component';
import { CdkDrag, CdkDragDrop, CdkDragEnter, CdkDropList, CdkDropListGroup, DragDropModule, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'editable-route',
  standalone: true,
  imports: [EditableContainerComponent,CdkDropListGroup,DragDropModule],
  templateUrl: './editable-route.component.html',
  styleUrl: './editable-route.component.scss'
})
export class EditableRouteComponent {
@Input() route!: WebsiteRoute
@Input() dragType!: string
@Output() dropCmp = new EventEmitter()
@Output() dropContainer = new EventEmitter()



onDropContainer(ev: CdkDragDrop<Container[]>) {
  console.log(ev)
  moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);


}
// containerPredicate(item : CdkDrag<any> ,  drop: CdkDropList<any>){
 
//   console.log("🚀 ~ EditableRouteComponent ~ containerPredicate ~ drop:", drop)
//   console.log("🚀 ~ EditableRouteComponent ~ containerPredicate ~ item:", item)
//   // return item.data['type'] === 'container';
//   return false
// }
}
