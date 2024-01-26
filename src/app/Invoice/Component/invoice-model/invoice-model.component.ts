import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICustomer } from 'src/app/_models/customer.model';
import { Invoice } from 'src/app/_models/invoice.model';
import { IProduct } from 'src/app/_models/product.model';
import { AccountService } from 'src/app/_services/account.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { InvoiceService } from 'src/app/_services/invoice.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-invoice-model',
  templateUrl: './invoice-model.component.html',
  styleUrls: ['./invoice-model.component.css']
})
export class InvoiceModelComponent implements OnInit {

  @ViewChild('invoiceForm') registerForm: NgForm | undefined;

  InvoiceModel : any | undefined;
  InvoiceProducts : Invoice | undefined;
  customerList: ICustomer[] = []
  productList: IProduct[] = []
  defaultDate: any; 
  userloggged: any;
  selectedProduct: any = {};

  constructor(private customerService: CustomerService, private productService: ProductService,
    private invoiceService: InvoiceService, private userService: AccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getProducts();
    const today = new Date().toISOString().split('T')[0];
    this.defaultDate = today;

    // Initialize InvoiceModel to set today date
    this.InvoiceModel = {
      transactionDate: today,
      products: []
    };
  }

  isFormValid(): boolean {
    return (
      this.selectedProduct.productId &&
      this.selectedProduct.productQty &&
      this.selectedProduct.amount
    );
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe((customers) => {
      this.customerList = customers;
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  addProduct() {
    if (!this.InvoiceModel || !this.InvoiceModel.products) {
      console.error("InvoiceModel or products array is not properly initialized.");
      return;
  }

    this.InvoiceModel.products.push({
      productId: this.selectedProduct.productId,
      productQty: this.selectedProduct.productQty,
      discountAmount: this.selectedProduct.discountAmount,
      amount: this.selectedProduct.amount
    });
  }

  getProductById(productId: number): IProduct | undefined {
    return this.productList.find(product => product.id === productId);
  }

  async saveInvoice(){
    if(this.InvoiceModel.products.length > 0){
      this.invoiceService.saveInvoice(this.InvoiceModel).subscribe({
        next: (response: Invoice) => {
          this.InvoiceModel = response
          this.toastr.success("Invoice created successfully");
          this.sendInvoiceToPrint(this.InvoiceModel.id);
        },
        error: (error) => {
          console.error('Error saving invoice:', error);
          this.toastr.error("Failed to save invoice. Please try again.");
        }
      })
    }else{
      this.toastr.error("Please add items");
    }
    
  }

  async sendInvoiceToPrint(invoiceId:number) {
    if(invoiceId){
      const invoiceIdToPrint = invoiceId
      this.router.navigate(['/invoice-template', invoiceIdToPrint]);
    }
  }



}
