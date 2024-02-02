import { Component, Input } from '@angular/core';
import { Column } from '../../../models/website.model';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormCmpComponent } from '../dynamic-cmps/form-cmp/form-cmp.component';
import { ImgCmpComponent } from '../dynamic-cmps/img-cmp/img-cmp.component';
import { TxtCmpComponent } from '../dynamic-cmps/txt-cmp/txt-cmp.component';
import { VideoCmpComponent } from '../dynamic-cmps/video-cmp/video-cmp.component';
import { IconBarCmpComponent } from '../dynamic-cmps/icon-bar-cmp/icon-bar-cmp.component';
import { NavBarCmpComponent } from '../dynamic-cmps/nav-bar-cmp/nav-bar-cmp.component';
import { MapCmpComponent } from '../dynamic-cmps/map-cmp/map-cmp.component';

@Component({
  selector: 'column',
  standalone: true,
  imports: [NgComponentOutlet,CommonModule,MapCmpComponent, FormCmpComponent,IconBarCmpComponent, ImgCmpComponent, NavBarCmpComponent, TxtCmpComponent, VideoCmpComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss'
})
export class ColumnComponent {
  @Input() column!: Column
}
