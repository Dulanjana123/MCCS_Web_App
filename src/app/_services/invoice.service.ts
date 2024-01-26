import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IInvoice, Invoice } from '../_models/invoice.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private api: string = `${environment.api}`;

  constructor(private http : HttpClient) { }

  getInvoices(){
    return this.http.get<IInvoice[]>(this.api + 'invoice');
  }

  getInvoice(id:number){
    return this.http.get<Invoice>(this.api + 'invoice/' + id);
  }

  saveInvoice(model:Invoice){
    return this.http.post<Invoice>(this.api + "invoice/", model);
  }

  updateInvoice(model:Invoice, id:number){
    return this.http.put(this.api+ 'invoice/' +id, model);
  }
  
}
