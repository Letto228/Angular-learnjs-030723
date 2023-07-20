import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {DumpNgIfModule} from '../../shared/dump-ng-if/dump-ng-if.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule, DumpNgIfModule, MatProgressSpinnerModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
