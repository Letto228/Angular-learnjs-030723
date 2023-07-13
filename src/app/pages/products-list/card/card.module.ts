import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {CardComponent} from './card.component';
import {ProductMockService} from './product-mock.service';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule],
    providers: [ProductMockService],
    exports: [CardComponent],
})
export class CardModule {}
