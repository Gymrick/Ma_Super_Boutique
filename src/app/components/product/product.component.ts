import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  show:boolean = false;
  editProduct: any;
  

  constructor(private ps: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ps.getProductsService().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });

  }

  editProducts(product: any){
    this.editProduct = product; 
  }

  updateProducts(){
    this.ps.updateProductService(this.editProduct).subscribe( () => {
      console.log("Update succed!");  
      //this.router.navigate([""])
    })
  }

  deleteProduct(id: any) {
    this.ps.deleteProductService(id).subscribe(() => {
      console.log("Suppression succeed!");
      this.getAllProducts();
      this.show = true;
    });
  }

  filterByPrice(search: any){
      this.ps.filterByPriceService(search.value).subscribe( data => {
      console.log('Filter by price success !');
      this.products = data;
    });
  }

  filterByKeyWord(seach: any){
    console.log(seach.value);
    this.ps.filterByKeyWordService(seach.value).subscribe( data => {
      console.log('Filter by keyword success !');
      this.products = data;
    })
  }

  availability(id: any, available: any){
    this.ps.availabilityService(id, available).subscribe( () => {
      console.log('Yes');
      this.getAllProducts();
    })
  }

}
