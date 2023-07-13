import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';
import {Subscription} from 'rxjs';
import {ProductMockService} from './product-mock.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnDestroy {
    productModel: IProduct | undefined;
    currentImageNumber = 0;
    private readonly subscriptions: Subscription[] = [];

    constructor(private readonly _productMockService: ProductMockService) {}

    ngOnInit() {
        const subscription = this._productMockService.getMockData().subscribe({
            next: (mockData: IProduct) => {
                this.productModel = mockData;
            },
            error: (error: unknown) => {
                console.error(error);
            },
        });

        this.subscriptions.push(subscription);
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    nextImage(): void {
        if (!this.productModel) {
            return;
        }

        if (this.currentImageNumber === this.productModel.images.length - 1) {
            this.currentImageNumber = 0;

            return;
        }

        this.currentImageNumber += 1;
    }

    previousImage(): void {
        if (!this.productModel) {
            return;
        }

        if (this.currentImageNumber === 0) {
            this.currentImageNumber = this.productModel.images.length - 1;

            return;
        }

        this.currentImageNumber -= 1;
    }

    returnCurrentImageSrc(): string {
        if (!this.productModel) {
            return '0';
        }

        return this.productModel.images[this.currentImageNumber].url;
    }

    buyProduct(): void {
        console.info(`Вы купили продукт`);
    }
}
