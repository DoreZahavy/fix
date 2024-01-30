import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  constructor(private el: ElementRef) { }

    @Output() clickOutside = new EventEmitter<void>()

    @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
        const targetElement = event.target as HTMLElement
        const isClickedInside = this.el.nativeElement.contains(targetElement)
        if (!isClickedInside) {
            this.clickOutside.emit()
        }
    }

}
