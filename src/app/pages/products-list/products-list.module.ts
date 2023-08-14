import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProductsFilterModule} from 'src/app/shared/products-filter/products-filter.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {MyAsyncModule} from '../../shared/my-async/my-async.module';
import {FilterByPropertyModule} from 'src/app/shared/filter-by-property/filter-by-property.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CommonModule,
        CardModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        PaginationModule,
        MyAsyncModule,
        ProductsFilterModule,
        MatInputModule,
        FormsModule,
        FilterByPropertyModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
