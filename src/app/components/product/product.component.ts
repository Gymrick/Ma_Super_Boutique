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
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

  deleteProduct(id: any) {
    this.ps.deleteProduct(id).subscribe(() => {
      console.log("suppression succeed!");
      this.getAllProducts();
      this.show = true;
    });
  }

  availability(id: any, available: any){
    this.ps.availability(id, available).subscribe( () => {
      console.log('Yes');
      this.getAllProducts();
    })
  }

}
