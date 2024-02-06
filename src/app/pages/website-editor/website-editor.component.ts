import { Component, EventEmitter, Output, inject } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { EditorHeaderComponent } from './editor-header/editor-header.component';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { EditableWebsiteComponent } from './editable-website/editable-website.component';
import { CdkDragDrop, DragDropModule, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Cmp, Container, Website } from '../../models/website.model';

@Component({
  selector: 'website-editor',
  standalone: true,
  imports: [DragDropModule, EditorHeaderComponent, CommonModule, LeftSidebarComponent, EditableWebsiteComponent],
  templateUrl: './website-editor.component.html',
  styleUrl: './website-editor.component.scss'
})
export class WebsiteEditorComponent {

  @Output() dropCmp = new EventEmitter()
  @Output() dropContainer = new EventEmitter()

  websiteService = inject(WebsiteService)
  activatedRoute = inject(ActivatedRoute)
  website = this.websiteService.website
  routeName = ''
  dragType = ''

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      // take(1),
      map(params => params['name']),
      switchMap(name => this.websiteService.getByName(name)),
      tap(website => {
        this.routeName = website.defaultRoute
        console.log('params.route', this.routeName)
      }),
    ).subscribe({
      next: website => console.log('website fetched:', website.name),
      error: err => console.log('err:', err)
    })
  }

  onSetDragType(dragType: string) {
    this.dragType = dragType
  }

  onSaveWebsite(ev: MouseEvent) {
    this.websiteService.save(this.website() as Website)
  }

  onDropCmp(ev:CdkDragDrop<Cmp[]>){
    if (ev.previousContainer === ev.container) {
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);
    } else if (ev.previousContainer.id === 'elements') {
      copyArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex,
      )
    } else {
      transferArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex,
      )
    }
  }

  onDropContainer(ev:CdkDragDrop<Container[]>){
    if (ev.previousContainer === ev.container) {
      moveItemInArray(ev.container.data, ev.previousIndex, ev.currentIndex);
    } else{

      copyArrayItem(
        ev.previousContainer.data,
        ev.container.data,
        ev.previousIndex,
        ev.currentIndex,
        )
        
      }
  }

}
