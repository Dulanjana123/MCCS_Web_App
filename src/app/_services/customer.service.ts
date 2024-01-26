import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer, ICustomer } from '../_models/customer.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api: string = `${environment.api}`;

  constructor(private http : HttpClient) { }

  getCustomers(){
    return this.http.get<ICustomer[]>(this.api + 'customer');
  }

  getCustomer(id: number){
    return this.http.get<ICustomer[]>(this.api + 'customer/' + id);
  }

  saveCustomer(model: Customer){
    return this.http.post<any>(this.api + "customer/", model).pipe(
      map((user : Customer) => {
        if(user) {
         console.log("Customer added successfully.");
        }
      })
    )
  }

  updateCustomer(customer: Customer, id: Number) {
    return this.http.put(this.api + 'customer/' + id, customer);
  }
}
