import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {ProductMockService} from './services/product-mock/product-mock.service';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule],
    providers: [ProductMockService],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
