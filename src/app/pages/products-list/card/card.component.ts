import {Component, Input} from '@angular/core';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product!: IProduct;
    currentImageNumber = 0;

    nextImage(): void {
        const lastImageIndex = this.product.images.length - 1;
        const firstImageIndex = 0;
        const isLastMessageIndex = this.currentImageNumber === lastImageIndex;

        this.currentImageNumber = isLastMessageIndex
            ? firstImageIndex
            : this.currentImageNumber + 1;
    }

    previousImage(): void {
        const lastImageIndex = this.product.images.length - 1;
        const firstImageIndex = 0;
        const isFirstMessageIndex = this.currentImageNumber === firstImageIndex;

        this.currentImageNumber = isFirstMessageIndex
            ? lastImageIndex
            : this.currentImageNumber - 1;
    }

    returnCurrentImageSrc(): string {
        return this.product.images[this.currentImageNumber].url;
    }

    buyProduct(): void {
        console.info(`Вы купили продукт`);
    }
}
