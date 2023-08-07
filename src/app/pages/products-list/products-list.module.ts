import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {MyAsyncModule} from '../../shared/my-async/my-async.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {ProductsListRoutingModule} from './products-list-routing.module';
import {CounterInputModule} from '../../shared/counter-input/counter-input.module';
import {TestValidatorsModule} from '../../shared/test-validators/test-validators.module';

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
        FilterByPropertyModule,
        RouterModule,
        ProductsListRoutingModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
        TestValidatorsModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
