import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('createForm') registerForm: NgForm | undefined;

  model: any = {}

  constructor(private toastr: ToastrService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productService.saveProduct(this.model).subscribe({
      next: () => {
        this.toastr.success("Product added successfully");
      }
    })
  }

}
