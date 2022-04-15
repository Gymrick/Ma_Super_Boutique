import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsService(){
    return this.http.get("http://localhost:3000/products");
  }

  deleteProductService(id:any){
  return this.http.delete("http://localhost:3000/products/"+ id);
  }

 updateProductService(product: any){
  return this.http.put("http://localhost:3000/products/", product);
  }

  // La méthode post a besoin de 2 parametres: le lien et l'argument
  addProductService(product: any){
    return this.http.post("http://localhost:3000/products", product);
  }

  availabilityService(id : any, available: any){
    return this.http.patch("http://localhost:3000/products/" + id, {available: !available});
  }

  filterByPriceService(data: any){
    let priceMin = data.min; 
    let priceMax = data.max;
    return this.http.get("http://localhost:3000/products?price_gte="+priceMin+"&price_lte="+priceMax);
  }

  filterByKeyWordService(data: any){
    let word = data.word; 
    return this.http.get("http://localhost:3000/products?q="+word);
  }

}
