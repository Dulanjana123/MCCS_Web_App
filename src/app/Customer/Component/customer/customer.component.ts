import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  model: any = {}

  constructor(private toastr: ToastrService, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(){
    this.customerService.saveCustomer(this.model).subscribe({
      next: () => {
        this.toastr.success("Customer register success!!!");
      }
    })
  }

}
