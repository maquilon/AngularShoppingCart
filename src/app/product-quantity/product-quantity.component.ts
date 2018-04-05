import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartServices: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartServices.addToCart(this.product);
  }

  removeFromCart() {
    this.shoppingCartServices.removeFromCart(this.product);
  }


}
