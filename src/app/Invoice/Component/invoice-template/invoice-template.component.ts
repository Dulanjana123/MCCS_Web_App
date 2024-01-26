import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Invoice } from 'src/app/_models/invoice.model';
import { InvoiceService } from 'src/app/_services/invoice.service';

@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.css']
})
export class InvoiceTemplateComponent implements OnInit {

  invoiceModel: any;
  constructor(private toastr: ToastrService, private route: ActivatedRoute,
    private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const invoiceId =  parseInt(params['id']);
      this.sendInvoiceToPrint(invoiceId);
    });
  }

  sendInvoiceToPrint(invoiceId: number) {
    if (invoiceId) {
      this.invoiceService.getInvoice(invoiceId).subscribe({
        next: (response:Invoice) => {
          this.invoiceModel = response;
        },
        error: (error) => {
          this.toastr.error("Failed to load invoice. Please try again.");
        }
      })
      
    }
  }
}
