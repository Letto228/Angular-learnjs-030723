import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';
import {ProductMockService} from './services/product-mock/product-mock.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, AfterViewInit {
    product!: IProduct;
    notifier: Subject<void> = new Subject();
    constructor(private readonly productMockService: ProductMockService) {}

    ngOnInit() {
        const source = this.productMockService.getMockData();

        source.pipe(takeUntil(this.notifier)).subscribe({
            next: (product: IProduct) => {
                this.product = product;
            },
        });
    }

    ngAfterViewInit(): void {
        this.notifier.next();
    }
}
