export declare enum TDiscountType {
    fixed = "fixed",
    percent = "percent"
}
export interface IItem {
    id: number;
    price: string;
    qty: number;
}

export interface IItemsTotal {
    price: string;
    qty: number;
}
export interface IDiscountRow {
    type: TDiscountType;
    value: number;
}
export interface ICustomerLocation {
    country_id: number;
    state?: string;
    zip?: string;
}

export interface ITotal {
    itemsSubTotal: IItemsTotal;
    price: string;
    discount: string;
    paymentMarkUp: string;
    servicesSubTotal: {
        price: string;
        qty: number;
    };
}
