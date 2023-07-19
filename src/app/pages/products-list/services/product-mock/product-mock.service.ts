import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Injectable()
export class ProductMockService {
    getMockData(): Observable<IProduct> {
        return of(productMock);
    }
}
