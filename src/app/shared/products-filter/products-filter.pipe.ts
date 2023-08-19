import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: IProduct[], query: string): IProduct[] {
        const filteredData = products.filter(item => item.name.includes(query));

        return filteredData;
    }
}
