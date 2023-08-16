import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of, take} from 'rxjs';
import {MemoizedSelector} from '@ngrx/store';
import {ProductsListComponent} from './products-list.component';
import {ProductsListModule} from './products-list.module';
import {BrandsService} from '../../shared/brands/brands.service';
import {loadProducts} from '../../store/products/products.actions';
import {productsSelector} from '../../store/products/products.selector';
import {IState} from '../../store/reducer';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

describe('ProductsListComponent', () => {
    let component!: ProductsListComponent;
    let fixture!: ComponentFixture<ProductsListComponent>;
    let mockStore!: MockStore;
    let dispatchSpy!: jasmine.Spy;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
            providers: [
                {
                    provide: BrandsService,
                    useValue: {
                        brands$: of([]),
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        loadBrands(_subCategoryId?: string | null) {},
                    },
                },
                provideMockStore(),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        mockStore = TestBed.inject(MockStore);

        dispatchSpy = spyOn(mockStore, 'dispatch');

        mockStore.overrideSelector(
            productsSelector as MemoizedSelector<IState, IProduct[]>,
            productsMock,
        );

        fixture = TestBed.createComponent(ProductsListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    // it('Загрузка данных', fakeAsync(() => {
    //     expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

    //     let products: IProduct[] | null = null;

    //     component.products$.subscribe(value => {
    //         products = value;
    //     });

    //     tick(1100);

    //     expect<IProduct[] | null>(products).toEqual(productsMock);
    // }));
    it('Загрузка данных', complete => {
        expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

        component.products$.pipe(take(1)).subscribe({
            next: value => {
                expect(value).toEqual(productsMock);
            },
            complete,
        });
    });
});
