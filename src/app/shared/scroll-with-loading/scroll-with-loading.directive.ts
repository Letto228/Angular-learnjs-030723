import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();

    @HostListener('scroll', ['$event.target'])
    onScroll(target: HTMLElement): void {
        const viewportHeight = target.clientHeight;
        const currentScrollTop = target.scrollTop;
        const borderOffset = 100;

        const nearTop = Math.abs(currentScrollTop) < borderOffset;
        const nearBottom =
            Math.abs(viewportHeight + currentScrollTop - target.scrollHeight) <= borderOffset;

        if (nearTop || nearBottom) {
            this.loadData.emit(nearTop ? LoadDirection.Up : LoadDirection.Down);
        }
    }
}
