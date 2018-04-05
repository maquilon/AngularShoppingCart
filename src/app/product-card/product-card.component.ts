import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product: Product
  @Input('show-actions') showActions = true;

  constructor(private shoppingCartServices: ShoppingCartService) { }

  addToCart(product: Product) {
    this.shoppingCartServices.addToCart(product);
  }

}
