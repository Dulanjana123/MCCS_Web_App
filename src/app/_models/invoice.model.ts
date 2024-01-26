import { Customer } from "./customer.model";
import { InvoiceProduct } from "./invoice-product.model";
import { Product } from "./product.model";

export interface IInvoice{
    id: number;
    customerId: number;
    totalAmount: number;
    transactionDate : Date;
    createdDate: Date;
    createdBy: number;
    customer: Customer;
    products: InvoiceProduct[];
}

export class Invoice implements IInvoice {
    id!: number;
    customerId!: number;
    totalAmount!: number;
    transactionDate! : Date;
    createdDate!: Date;
    createdBy!: number;
    customer!: Customer;
    products!: InvoiceProduct[];
}
