import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {MyAsyncModule} from '../../shared/my-async/my-async.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {SCOPE_NAME} from '../../shared/scope-name/scope-name.token';

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
    ],
    providers: [
        {
            provide: SCOPE_NAME,
            useValue: 'ProductsListModule',
        },
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
