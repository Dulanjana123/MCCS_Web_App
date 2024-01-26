export interface IProduct{
    id: number;
    name: string;
    description: string;
    isActive: boolean;
}

export class Product implements IProduct {
    id! : number;
    name! : string;
    description! : string;
    isActive! : boolean;
}