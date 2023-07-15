import {IProduct} from 'src/app/shared/products/product.interface';

import {Component} from '@angular/core';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-product-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    item: IProduct = productMock;

    buyItem($event: MouseEvent) {
        // eslint-disable-next-line no-console
        console.log($event);
    }
}
