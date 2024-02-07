import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'txt-dialog',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './txt-dialog.component.html',
  styleUrl: './txt-dialog.component.scss'
})
export class TxtDialogComponent {
  @Input() cmp!:Cmp 

}
