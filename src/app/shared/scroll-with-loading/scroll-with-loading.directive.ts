import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();

    private scrollPosition = 0;
    private scrollDirection: 'up' | 'down' | undefined;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, scrollHeight, clientHeight}: HTMLElement): void {
        const borderOffset = 100;

        const nearTop = Math.abs(scrollTop) < borderOffset;
        const nearBottom = Math.abs(clientHeight + scrollTop - scrollHeight) <= borderOffset;

        this.getScrollDirection(scrollTop);

        switch (true) {
            case this.scrollDirection === 'down' && nearBottom:
                this.loadData.emit(LoadDirection.Down);
                break;
            case this.scrollDirection === 'up' && nearTop:
                this.loadData.emit(LoadDirection.Up);
                break;
        }
    }

    private getScrollDirection(currentScrollPosition: number) {
        if (currentScrollPosition > this.scrollPosition) {
            this.scrollDirection = 'down';
        } else if (currentScrollPosition < this.scrollPosition) {
            this.scrollDirection = 'up';
        }

        this.scrollPosition = currentScrollPosition;
    }
}
