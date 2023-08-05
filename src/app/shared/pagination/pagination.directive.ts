import {
    Directive,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, Subject, map, takeUntil} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';

import chunk from '../utils/chunk';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnDestroy, OnChanges {
    @Input() appPaginationOf: T[] | null | undefined;
    @Input() appPaginationChunkSize = 4;

    private items: T[][] = [];

    private readonly currentIndex$ = new BehaviorSubject<number>(0);
    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IPaginationContext<T>>,
    ) {}

    ngOnInit(): void {
        this.listenCurrentIndexChange();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnChanges({appPaginationOf, appPaginationChunkSize}: SimpleChanges): void {
        if (appPaginationOf || appPaginationChunkSize) {
            this.updateView();
        }
    }

    private updateView() {
        const hasViewItems = this.appPaginationOf?.length;

        if (!hasViewItems) {
            this.viewContainerRef.clear();

            return;
        }

        if (this.appPaginationOf instanceof Array && this.appPaginationChunkSize) {
            this.items = chunk(this.appPaginationOf, this.appPaginationChunkSize);
        }

        this.currentIndex$.next(0);
    }

    private listenCurrentIndexChange() {
        this.currentIndex$
            .pipe(
                map(currentIndex => this.getCurrentContext(currentIndex)),
                takeUntil(this.destroy$),
            )
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): IPaginationContext<T> {
        return {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $implicit: this.items[currentIndex],
            appPaginationOf: this.items as T[],
            chunkSize: this.appPaginationChunkSize,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            pageIndexes: this.items.map((_, index) => index),
            index: currentIndex,
            selectIndex: (index: number) => {
                this.selectIndex(index);
            },
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
        };
    }

    private selectIndex(index: number) {
        this.currentIndex$.next(index);
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.items.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const newIndex = previousIndex >= 0 ? previousIndex : this.items.length - 1;

        this.currentIndex$.next(newIndex);
    }
}
