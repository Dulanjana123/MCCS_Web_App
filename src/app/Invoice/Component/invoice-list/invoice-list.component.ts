import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, ICustomer } from 'src/app/_models/customer.model';
import { Invoice } from 'src/app/_models/invoice.model';
import { CustomerService } from 'src/app/_services/customer.service';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoiceList: Invoice[] = [];
  customerdata: Customer | undefined;

  constructor(private router: Router, private invoiceService: InvoiceService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((invoices) => {
      this.invoiceList = invoices;
    })
  }

  
  toView(id : any){
    this.router.navigate(['/invoice-template', id]);
  }

}
