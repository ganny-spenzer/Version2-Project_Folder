import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../productData.service';

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css'],
})
export class ProductdescriptionComponent {
  allProducts: any = '';
  requiredProduct: any = '';
  finalProduct: any = '';

  constructor(private upcomingService: ProductDataService,private route: ActivatedRoute) {
    this.upcomingService.getProducts().subscribe(data => {(this.allProducts = data)
        this.route.params.subscribe((urlData) => {
          this.requiredProduct = urlData['check'];
          for (let product of this.allProducts) {
            if (product.Model == this.requiredProduct) {
              this.finalProduct = product;
            }
          }
        });

      });
  }
}
