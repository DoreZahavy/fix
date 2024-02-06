import { Component, Input } from '@angular/core';
import { Cmp } from '../../../../models/website.model';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'editable-txt',
  standalone: true,
  imports: [OverlayModule,CommonModule],
  templateUrl: './editable-txt.component.html',
  styleUrl: './editable-txt.component.scss'
})
export class EditableTxtComponent {
  @Input() cmp!:Cmp 
  overlayOpen = false

  onDo(ev :Event){
  console.log("🚀 ~ EditableTxtComponent ~ onDo ~ ev:", ev)

  }
}
