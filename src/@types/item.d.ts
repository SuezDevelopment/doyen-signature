import {ILabel} from './label'
import {IImageShort} from './image'
export interface IItemPrice {
    item_price_id: number | string;
    price_id: number | string;
    basic_price: string | null;
    final_price: string | null;
    discount_amount: string | number | null;
    discount_percent: string | number | null;
}

export interface IVwItemProduct {
    product_id: number;
    sku: string | null;
    has_variants: boolean;
    title: string;
    url_key: string | null;
    default_category_id: number | string;
}
export interface IVwItem {
    item_id: number | string;
    type: 'product' | 'variant';
    track_inventory: boolean;
    available_qty: number;
    reserved_qty: number;
    product_id: number;
    variant_id: number | null;
    custom_item_id: number | null;
    deleted_at: string | null;
    product: IVwItemProduct;
    image: IImageShort | null;
    prices: IVwItemPrice[];
    labels: ILabel[];
}

export interface IVwItemPrice {
    point_id: number;
    price_id: number;
    alias: string;
    currency_id: number;
    currency_alias: string;
    value: number | null;
    min: number | null;
    max: number | null;
    is_auto_generated: boolean;
    old: number | null;
    old_min: number | null;
    old_max: number | null;
}