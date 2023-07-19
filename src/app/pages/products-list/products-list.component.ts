import {Component} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productsMock} from 'src/app/shared/products/products.mock';

export interface IProductInCart {
    productId: IProduct['_id'];
    count: number;
}

export type TCart = IProductInCart[];

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    readonly products: IProduct[] = productsMock;
    readonly cart: TCart = [];

    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }

    onBuyProduct(id: IProduct['_id']) {
        const productInCart = this.cart.find(prod => prod.productId === id);

        if (productInCart) {
            productInCart.count++;

            return;
        }

        this.cart.push({productId: id, count: 1});

        console.info(this.cart);
    }
}
