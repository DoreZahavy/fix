import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TxtDialogComponent } from '../../edit-dialogs/txt-dialog/txt-dialog.component';
@Component({
  selector: 'editable-txt',
  standalone: true,
  imports: [OverlayModule,CommonModule,FormsModule,TxtDialogComponent],
  templateUrl: './editable-txt.component.html',
  styleUrl: './editable-txt.component.scss'
})
export class EditableTxtComponent {
  @Input() cmp!:Cmp 

  overlayOpen = false

}
