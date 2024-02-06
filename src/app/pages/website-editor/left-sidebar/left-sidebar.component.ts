import { Component, EventEmitter, Output } from '@angular/core';
import { GetSvgDirective } from '../../../directives/get-svg.directive';
import { CommonModule } from '@angular/common';
import { PagesMenuComponent } from '../pages-menu/pages-menu.component';
import { ElementsMenuComponent } from '../elements-menu/elements-menu.component';
import { SectionsMenuComponent } from '../sections-menu/sections-menu.component';

@Component({
  selector: 'left-sidebar',
  standalone: true,
  imports: [GetSvgDirective,CommonModule,PagesMenuComponent,ElementsMenuComponent,SectionsMenuComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  @Output() dragtype = new EventEmitter()
  sidebarExpand = ''

  onSetExpand(tab:string){
    this.sidebarExpand = tab
    this.dragtype.emit(tab)
  }
}
