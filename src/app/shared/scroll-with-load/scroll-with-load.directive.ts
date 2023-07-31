import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

export enum ESrollDirection {
    up = 'up',
    down = 'down',
}

@Directive({
    selector: '[appScrollWithLoad]',
})
export class ScrollWithLoadDirective {
    prevHigherScrollPoint = 0;
    prevLowerScrollPoint = 0;

    @Output() appScrollWithLoadChange = new EventEmitter<ESrollDirection>();

    @HostListener('scroll', ['$event.target'])
    scrollChange(e: HTMLElement) {
        const lowTriggerPoint = e.scrollHeight - 100;
        const lowerScrollPoint = e.scrollTop + e.clientHeight;
        const highTriggerPoint = 100;
        const higherScrollPoint = e.scrollTop;

        if (this.prevLowerScrollPoint <= lowTriggerPoint && lowerScrollPoint > lowTriggerPoint) {
            this.appScrollWithLoadChange.emit(ESrollDirection.down);
        }

        if (
            this.prevHigherScrollPoint >= highTriggerPoint &&
            higherScrollPoint < highTriggerPoint
        ) {
            this.appScrollWithLoadChange.emit(ESrollDirection.up);
        }

        this.prevHigherScrollPoint = higherScrollPoint;
        this.prevLowerScrollPoint = lowerScrollPoint;
    }
}
