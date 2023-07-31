import {Component, OnInit} from '@angular/core';
import {ESrollDirection} from 'src/app/shared/scroll-with-load/scroll-with-load.directive';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    products: IProduct[] | null = null;

    ngOnInit(): void {
        setTimeout(() => {
            this.products = productsMock;
        }, 3000);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }

    get productsFromGet(): IProduct[] | null {
        // eslint-disable-next-line no-console
        console.log('Get products');

        return this.products;
    }

    loadProducts(value: ESrollDirection) {
        if (value === ESrollDirection.down) {
            setTimeout(() => {
                console.info('get products down');
            }, 500);
        }

        if (value === ESrollDirection.up) {
            setTimeout(() => {
                console.info('get products up');
            }, 500);
        }
    }
}
