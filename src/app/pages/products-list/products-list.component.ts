import {IProduct} from 'src/app/shared/products/product.interface';
import {Component} from '@angular/core';
import {productsMock} from 'src/app/shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    // encapsulation: ViewEncapsulation.Emulated,
})
export class ProductsListComponent {
    readonly products: IProduct[] = productsMock;

    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Card click');
    }

    handleAddToCart(id: string) {
        // eslint-disable-next-line no-console
        console.log(`Id ${id} added to cart`);
    }
}
