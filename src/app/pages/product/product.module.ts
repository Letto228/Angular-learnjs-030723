import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {ProductRoutingModule} from './product-routing.module';
import {CarouselModule} from '../../shared/carousel/carousel.module';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';

@NgModule({
    declarations: [ProductComponent, DescriptionComponent, TypeComponent],
    imports: [
        CommonModule,
        CarouselModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        RouterModule,
        ProductRoutingModule,
    ],
    exports: [ProductComponent],
})
export class ProductModule {}
