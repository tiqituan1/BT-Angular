import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CartService} from '../cart.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-detailproducts',
  templateUrl: './detailproducts.component.html',
  styleUrls: ['./detailproducts.component.css']
})
export class DetailproductsComponent implements OnInit {

  product: any;//bien chua product tuong ung voi id
  id =1;
  pageTitle = '';
  listproducts = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/Image/1.jpg",
      "sl": 1
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/Image/2.jpg",
      "sl": 2
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/Image/3.jpg",
      "sl": 3
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/Image/4.jpg",
      "sl": 4
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/Image/5.jpg",
      "sl": 5
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private cart :CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      para => {
      this.id = +para.get('productId');
      });
    this.product = this.listproducts.find(p => p.productId == this.id);
    this.pageTitle = this.product.productName;
  }
  onBack() {
    window.history.back();
  }
  addtoCart()
  {
    window.alert('Your product has been added to the cart!');
    let appProduct=Object.assign(this.product,{'quality':1})
    this.cart.addToCart(this.product);
  }
}
