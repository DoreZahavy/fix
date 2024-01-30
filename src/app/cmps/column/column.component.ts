import { Component, Input } from '@angular/core';
import { Column } from '../../models/website.model';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormCmpComponent } from '../dynamicCmps/form-cmp/form-cmp.component';
import { IconCmpComponent } from '../dynamicCmps/icon-cmp/icon-cmp.component';
import { ImgCmpComponent } from '../dynamicCmps/img-cmp/img-cmp.component';
import { LinkCmpComponent } from '../dynamicCmps/link-cmp/link-cmp.component';
import { TxtCmpComponent } from '../dynamicCmps/txt-cmp/txt-cmp.component';
import { VideoCmpComponent } from '../dynamicCmps/video-cmp/video-cmp.component';

@Component({
  selector: 'column',
  standalone: true,
  imports: [NgComponentOutlet,CommonModule, FormCmpComponent, IconCmpComponent, ImgCmpComponent, LinkCmpComponent, TxtCmpComponent, VideoCmpComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  @Input() 'column': Column
}
