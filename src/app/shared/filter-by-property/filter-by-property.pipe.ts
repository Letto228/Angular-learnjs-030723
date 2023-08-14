import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
    transform<T, P extends keyof T>(
        products: T[] | undefined | null,
        searchingProperty: P,
        searchingValue: T[P],
    ): T[] | undefined | null {
        if (!products?.length || !searchingProperty || !searchingValue) {
            return [];
        }

        if (typeof searchingValue === 'string') {
            return products.filter(prod => {
                return (prod[searchingProperty] as string)
                    .toLowerCase()
                    .includes(searchingValue.toLowerCase());
            });
        }

        return products.filter(prod => {
            return prod[searchingProperty] === searchingValue;
        });
    }
}
