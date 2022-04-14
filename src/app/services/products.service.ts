import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  deleteProduct(id:any){
  return this.http.delete("http://localhost:3000/products/"+ id);
  }

  // La méthode post a besoin de 2 parametres: le lien et l'argument
  addNewProduct(product: any){
    return this.http.post("http://localhost:3000/products", product);
  }

  availability(id : any, available: any){
    return this.http.patch("http://localhost:3000/products/" + id, {available: !available});
  }

}
