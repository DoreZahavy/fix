import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { SvgService } from '../services/svg.service';
import { take } from 'rxjs';

@Directive({
  selector: '[getSvg]',
  standalone: true
})
export class GetSvgDirective implements OnInit {
  @Input('getSvg') svgName!: string;

  ngOnInit() {
    this.loadSvg();
  }
  // constructor(private elementRef: ElementRef) {}
  private elementRef = inject(ElementRef)
  private svgService = inject(SvgService)
  
  loadSvg() {
    // console.log("🚀 ~ GetSvgDirective ~ svgName:", this.svgName)
    this.svgService.getSvg(this.svgName).pipe(take(1)).subscribe({
      next: (svgContent: string) => {
        // console.log("🚀 ~ GetSvgDirective ~ this.svgService.getSvg ~ svgContent:", svgContent)
        this.elementRef.nativeElement.innerHTML = svgContent;
      },
      error: (err) => {
        console.error('Error loading SVG:', err);
      }
     } );
  }
}
