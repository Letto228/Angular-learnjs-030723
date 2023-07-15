import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | undefined;
    @Output() productBuyChanged = new EventEmitter<boolean>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('Buy product');
        this.productBuyChanged.emit();
    }

    isStarActive(starIndex: number): boolean {
        return this.product!.rating >= starIndex;
    }
}
