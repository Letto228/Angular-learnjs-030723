import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
import {LoadDirection} from './load-direction.enum';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output() loadData = new EventEmitter<LoadDirection>();

    private readonly borderOffset = 100;
    private scrollPosition = 0;
    private scrollDirection: 'up' | 'down' | undefined;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, scrollHeight, clientHeight}: HTMLElement): void {
        const nearTop = Math.abs(scrollTop) < this.borderOffset;
        const nearBottom = Math.abs(clientHeight + scrollTop - scrollHeight) <= this.borderOffset;

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
