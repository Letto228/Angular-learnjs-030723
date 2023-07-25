import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | undefined;

    // свойство templateProduct создано для имитации асинхронного запроса
    templateProduct: IProduct | undefined;

    constructor() {
        setTimeout(() => {
            this.templateProduct = this.product;
        }, 1000);
    }

    @Output() productToBuy: EventEmitter<IProduct['_id']> = new EventEmitter();

    onProductBuy(event: Event) {
        event.stopPropagation();
        this.productToBuy.emit(this.product?._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product!.rating >= starIndex;
    }
}
