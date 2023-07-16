import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

// import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    // readonly product = productsMock[0];
    @Input() product: IProduct | undefined;
    @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

    onAddToCart() {
        this.addToCart.emit(this.product?._id);
    }

    isStarActive(starIndex: number): boolean | undefined {
        if (!this.product) {
            return undefined;
        }

        return this.product.rating >= starIndex;
    }
}
