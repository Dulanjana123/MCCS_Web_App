export interface IInvoiceProduct {
    productId: number;
    invoiceId: number;
    productQty: number;
    amount: number;
    discountAmount: number;
    totalAmount: number;
}

export class InvoiceProduct implements IInvoiceProduct {
    productId!: number;
    invoiceId!: number;
    productQty!: number;
    amount!: number;
    discountAmount!: number;
    totalAmount!: number;
}


