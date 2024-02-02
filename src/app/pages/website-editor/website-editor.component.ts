import { Component, inject } from '@angular/core';
import { WebsiteService } from '../../services/website.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { EditorHeaderComponent } from './editor-header/editor-header.component';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { EditableWebsiteComponent } from './editable-website/editable-website.component';

@Component({
  selector: 'website-editor',
  standalone: true,
  imports: [EditorHeaderComponent,CommonModule,LeftSidebarComponent,EditableWebsiteComponent],
  templateUrl: './website-editor.component.html',
  styleUrl: './website-editor.component.scss'
})
export class WebsiteEditorComponent {
  websiteService = inject(WebsiteService)
  activatedRoute = inject(ActivatedRoute)
  website = this.websiteService.website
  routeName = ''
  ngOnInit(): void {
    // this.router.routerState.snapshot.
    this.activatedRoute.params.pipe(
      // take(1),
      map(params => params['name']),
      switchMap(name => this.websiteService.getByName(name)),
      tap(website => {
         this.routeName = website.defaultRoute
      console.log('params.route',this.routeName)
    }),
    ).subscribe({
      next: website => console.log('website fetched:', website.name),
      error: err => console.log('err:', err)
    })
  }

}
