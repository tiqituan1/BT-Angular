import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  items;
  constructor(
    private cart: CartService
  ) { }
 
  ngOnInit() {
    this.items = this.cart.getItems();
  }

}
