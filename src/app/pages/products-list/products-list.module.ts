import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {CardComponent} from './card/card.component';
import {ProductMockService} from './card/product-mock.service';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent, CardComponent],
    imports: [CommonModule, MatButtonModule, MatCardModule, MatDividerModule],
    providers: [ProductMockService],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
