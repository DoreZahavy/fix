import { Directive, ElementRef, Input, inject } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { take } from 'rxjs';

@Directive({
  selector: '[getSvg]',
  standalone: true
})
export class GetSvgDirective {
  @Input() svgName!: string;
  constructor(private elementRef: ElementRef) {}
  private svgService = inject(SvgService)
  
  loadSvg() {
    this.svgService.getSvg(this.svgName).pipe(take(1)).subscribe({
      next: (svgContent: string) => {
        this.elementRef.nativeElement.innerHTML = svgContent;
      },
      error: (err) => {
        console.error('Error loading SVG:', err);
      }
     } );
  }
}
