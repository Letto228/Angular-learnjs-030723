import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';
import {ProductsListModule} from './pages/products-list/products-list.module';
import {CardModule} from './pages/products-list/card/card.module';

// Component/Directive

// Pipe

// Module

// Service

@NgModule({
    declarations: [AppComponent], // const
    exports: [], // module.exports = {...}
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        ProductsListModule,
        CardModule,
    ], // import {...} from '...'
    bootstrap: [AppComponent],
})
export class AppModule {}
