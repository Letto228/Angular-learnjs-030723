import {Component} from '@angular/core';
import {IProductImage} from 'src/app/shared/products/product-image.interface';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';

@Component({
    selector: 'app-product-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    private readonly priceFormatter = Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        useGrouping: false,
    });

    product: IProduct = productMock;
    productImg: IProductImage = productMock.images[0];
    productPrice = this.priceFormatter.format(this.product.price);

    onBuyClicked($event: Event): void {
        $event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('A customer wants to buy');
    }
}
