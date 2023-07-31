import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollWithLoadDirective} from './scroll-with-load.directive';

@NgModule({
    declarations: [ScrollWithLoadDirective],
    imports: [CommonModule],
    exports: [ScrollWithLoadDirective],
})
export class ScrollWithLoadModule {}
