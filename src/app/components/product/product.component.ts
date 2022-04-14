import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  show:boolean = false;
  
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ps.getProductsService().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

  deleteProduct(id: any) {
    this.ps.deleteProductService(id).subscribe(() => {
      console.log("suppression succeed!");
      this.getAllProducts();
      this.show = true;
    });
  }

  filterByPrice(search:any){
    console.log(search.value);
      this.ps.filterByPriceService(search.value).subscribe( data => {
      console.log('Filter success !');
      this.products = data;
    });

  }

  availability(id: any, available: any){
    this.ps.availabilityService(id, available).subscribe( () => {
      console.log('Yes');
      this.getAllProducts();
    })
  }

}
