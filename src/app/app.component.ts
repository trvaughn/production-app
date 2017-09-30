import { 
  Component, EventEmitter 
} from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Inventory logic here
  product: Product[];

  constructor() {
    this.product = [
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/resources/images/products/black-hat.jpg',
          ['Men', 'Accessories','Hats'],
          29.99),
        new Product(
            'NEATOJACKET',
            'Blue Jacket',
            '/assets/images/products/blue-jacket.jpg',
            ['Women', 'Apparel', 'Jackets & Vests'],
            238.99),
        new Product(
            'MYSHOES',
            'Black Running Shoes',
            '/assets/images/products/black-shoes.jpg',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}
