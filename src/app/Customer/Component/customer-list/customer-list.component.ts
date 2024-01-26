import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/_models/customer.model';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => {
      this.customerList = customers;
    })
  }

  toView(id : any){
    this.router.navigate(['/invoice-template', id]);
  }

}
