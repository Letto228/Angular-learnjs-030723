import {
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {IPaginationContext} from './pagination-context.interface';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit, OnChanges {
    @Input() appPaginationOf: T[] = [];
    @Input() chankSize = 4;

    private pageIndexes: number[] = [];
    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<IPaginationContext<T>>,
    ) {}

    ngOnInit(): void {
        this.listenCurrentIndexChange();
        this.updateView();
    }

    ngOnChanges({chankSize}: SimpleChanges): void {
        if (chankSize) {
            this.updateView();
        }
    }

    private listenCurrentIndexChange() {
        this.currentIndex$
            .pipe(map(currentIndex => this.getCurrentContext(currentIndex)))
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): IPaginationContext<T> {
        return {
            $implicit: this.getArrayOfItemsInOnePage!(currentIndex),
            appPaginationOf: this.appPaginationOf as T[],
            currentIndex,
            pageIndexes: this.getArrayOfPageIndexes(),
            next: idx => this.next(idx),
            back: idx => this.back(idx),
            updateChankSize: num => this.updateChankSize(num),
            firstPage: () => this.firstPage(),
            lastPage: idx => this.lastPage(idx),
            currentPage: idx => this.currentPage(idx),
        };
    }

    private updateChankSize(num: number) {
        this.chankSize = num;
        this.getArrayOfPageIndexes();
        this.updateView();
    }

    private getArrayOfItemsInOnePage(currentIndex: number) {
        if (currentIndex === 1) {
            return this.appPaginationOf.filter((item, idx) => idx < this.chankSize);
        }

        const lastIndex = currentIndex * this.chankSize;
        const startIndex = currentIndex * this.chankSize - this.chankSize;

        return this.appPaginationOf.filter((item, idx) => idx < lastIndex && idx >= startIndex);
    }

    private getArrayOfPageIndexes(): number[] {
        const arrayLength = Number(Math.ceil(this.appPaginationOf.length / this.chankSize));

        this.pageIndexes = [];

        for (let i = 0; i < arrayLength; i++) {
            this.pageIndexes[i] = i + 1;
        }

        return this.pageIndexes;
    }

    private updateView() {
        const hasArray = this.appPaginationOf?.length;

        if (!hasArray) {
            this.viewContainerRef.clear();

            return;
        }

        this.currentIndex$.next(1);
    }

    currentPage(idx: number) {
        this.currentIndex$.next(idx);
    }

    next(idx: number) {
        const indexToChange = this.getArrayOfPageIndexes().length === idx ? 1 : idx + 1;

        this.currentIndex$.next(indexToChange);
    }

    back(idx: number) {
        const indexToChange = idx === 1 ? this.getArrayOfPageIndexes().length : idx - 1;

        this.currentIndex$.next(indexToChange);
    }

    firstPage() {
        this.currentIndex$.next(1);
    }

    lastPage(idx: number) {
        this.currentIndex$.next(idx);
    }
}
