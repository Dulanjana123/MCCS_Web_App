import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct, Product } from '../_models/product.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private api: string = `${environment.api}`;
  
  constructor(private http : HttpClient) { }

  getProducts(){
    return this.http.get<IProduct[]>(this.api + 'product');
  }

  getProduct(id:number){
    return this.http.get<IProduct[]>(this.api + 'product' + id);
  }

  saveProduct(model:Product){
    return this.http.post<any>(this.api + "product/", model).pipe(
      map((user : Product) => {
        if(user) {
         console.log("Product added successfully.");
        }
      })
    )
  }

  updateProduct(model:Product, id:number){
    return this.http.put(this.api+ 'product/' +id, model);
  }
}
