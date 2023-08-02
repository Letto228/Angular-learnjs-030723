export interface IPaginationContext<T> {
    $implicit: T[];
    appPaginationOf: T[];
    updateChankSize: (num: number) => void;
    pageIndexes: number[];
    currentIndex: number;
    next: (idx: number) => void;
    back: (idx: number) => void;
    firstPage: () => void;
    lastPage: (idx: number) => void;
    currentPage: (idx: number) => void;
}
