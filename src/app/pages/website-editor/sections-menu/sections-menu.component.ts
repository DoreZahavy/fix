import { Component, EventEmitter, Output } from '@angular/core';
import { Cmp, Container } from '../../../models/website.model';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'sections-menu',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './sections-menu.component.html',
  styleUrl: './sections-menu.component.scss'
})
export class SectionsMenuComponent {
  @Output() close = new EventEmitter()
  templates: Container[] = [
    {
      type:'container',
      _id: 'sdgsdgsd',
      columns: [
        {
          _id: '23fg35',
          cmps: [
            {
              _id: '1',
              type: 'txt',
              info: {
                txt: 'Sample text3'
              },
              style: {
                fontSize: '16px',
                color: '#000000'
              }
            },
            {
              _id: '2',
              type: 'img',
              info: {
                src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
                alt: 'Sample image'
              },
              style: {
                width: '100%',
                height: 'auto'
              }
            }
          ]
        }
      ]
    },
    {
      _id: 's55gsdgsd',
      type:'container',
      columns: [
        {
          _id: '235235',
          cmps: [
            {
              _id: '1',
              type: 'txt',
              info: {
                txt: 'Sample text1'
              },
              style: {
                fontSize: '16px',
                color: '#000000'
              }
            },
            {
              _id: '2',
              type: 'img',
              info: {
                src: 'https://res.cloudinary.com/dbdrnjhpm/image/upload/v1705694894/rnr_wnamo4.jpg',
                alt: 'Sample image'
              },
              style: {
                width: '100%',
                height: 'auto'
              }
            }
          ]
        }
      ]
    },
  ]


  predicate() {
    return false;
  }
}
