export interface IPaginationContext<T> {
    $implicit: T[];
    appPaginationOf: T[];
    chunkSize: number | undefined;
    pageIndexes: number[];
    index: number;
    next: () => void;
    back: () => void;
    selectIndex: (index: number) => void;
}
