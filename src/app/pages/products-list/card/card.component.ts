import { Component } from '@angular/core';
import {IProductImage} from 'src/app/shared/products/product-image.interface';
import {IProduct} from 'src/app/shared/products/product.interface';
import {productMock} from 'src/app/shared/products/product.mock';
// Зачем я здесь?

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  readonly addToCardText = 'В корзину';
  readonly priceValue = 150;
  readonly rouble = '₽';
  readonly productImg = 'https://c.dns-shop.ru/thumb/st4/fit/0/0/56311060fef8c8512e26644ea1dacae7/aea39235b351f8391baaaa8cdeb83d37e7296658cdc01e02c64be28587636963.jpg.webp';
  readonly productDescription = 'Планшет DEXP K61 выделяется элегантным оформлением и всеми необходимыми функциями как для работы, так и для развлечений. На дисплее 10.1 дюйма с матрицей IPS FullHD отображается четкая, яркая и реалистичная картинка независимо от положения. За высокую производительность системы при выполнении различных задач отвечают процессор с 4-мя ядрами и 4 ГБ памяти ОЗУ.   В DEXP K61 реализованы востребованные средства беспроводной связи, включая модуль 4G. На тыловой стороне расположена камера 5 Мп, а спереди дополнительно предлагается камера на 2 Мп. Одним из преимуществ планшета является аккумулятор 5000 мА*ч, который гарантирует продолжительную автономность на одном полноценном заряде.';
  addToCard($event: Event): void {
    $event.stopPropagation();
    console.log('Added To Card');
  }
}
