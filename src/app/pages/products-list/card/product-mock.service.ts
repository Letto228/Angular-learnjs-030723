import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Injectable()
export class ProductMockService {
    getMockData(): Observable<IProduct> {
        return new Observable(subscriber => {
            subscriber.next(productMock);
        });
    }
}
