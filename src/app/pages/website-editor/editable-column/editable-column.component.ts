import { Component, Input } from '@angular/core';
import { Column } from '../../../models/website.model';
import { EditableImgComponent } from '../editable-cmps/editable-img/editable-img.component';
import { EditableFormComponent } from '../editable-cmps/editable-form/editable-form.component';
import { EditableTxtComponent } from '../editable-cmps/editable-txt/editable-txt.component';
import { EditableVideoComponent } from '../editable-cmps/editable-video/editable-video.component';
import { EditableMapComponent } from '../editable-cmps/editable-map/editable-map.component';
import { EditableIconBarComponent } from '../editable-cmps/editable-icon-bar/editable-icon-bar.component';
import { EditableNavBarComponent } from '../editable-cmps/editable-nav-bar/editable-nav-bar.component';

@Component({
  selector: 'editable-column',
  standalone: true,
  imports: [EditableNavBarComponent,EditableIconBarComponent,EditableMapComponent,EditableImgComponent,EditableFormComponent,EditableTxtComponent,EditableVideoComponent],
  templateUrl: './editable-column.component.html',
  styleUrl: './editable-column.component.scss'
})
export class EditableColumnComponent {
@Input() column! : Column
}
