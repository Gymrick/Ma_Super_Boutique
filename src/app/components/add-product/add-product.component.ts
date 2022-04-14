import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor( private ps: ProductsService) {}
  
  ngOnInit(): void {
  }

  // Méthode d'enregistrement de produit
  addProduct(product: any){
    //let data = product.value
    this.ps.addNewProduct(product.value).subscribe( () => {
      console.log('saved success!')
    });
  }
}
