import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
// import {CardComponent} from './card/card.component';

import {CardModule} from './card/card.module';

@NgModule({
    // declarations: [ProductsListComponent, CardComponent],
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
