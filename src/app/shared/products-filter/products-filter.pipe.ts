import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(values: IProduct[], name: string): IProduct[] | [] {
        return values.filter(prod => {
            return prod.name.toLowerCase().includes(name.toLowerCase());
        });
    }
}
