import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule],
    exports: [CardComponent],
})
export class CardModule {}
