export interface ICustomer{
    id: number;
    name: string;
    address: string;
    isActive: boolean;
}

export class Customer implements ICustomer {
    id! : number;
    name! : string;
    address! : string;
    isActive! : boolean;
}
