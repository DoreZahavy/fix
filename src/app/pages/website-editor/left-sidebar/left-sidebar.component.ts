import { Component } from '@angular/core';
import { GetSvgDirective } from '../../../directives/get-svg.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'left-sidebar',
  standalone: true,
  imports: [GetSvgDirective,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  sidebarExpand = ''

  onExpand(tab:string){
    this.sidebarExpand = tab
  }
}
