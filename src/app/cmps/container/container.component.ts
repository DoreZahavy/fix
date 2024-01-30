import { Component, Input } from '@angular/core';
import { Container } from '../../models/website.model';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from '../column/column.component';


@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule,ColumnComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  @Input() 'container': Container 

}
