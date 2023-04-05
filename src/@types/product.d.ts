import {IImageItem, IProductImage} from './image'
import {ILabel} from './label'


export interface IProduct {
    product_id: number | string;
    title: string;
    sku?: string | null;
    url_key?: string | null;
    has_variants: boolean;
    item_id: number | string;
    price_id?: number | string | null;
    price_alias?: string;
    point_id: number | string;
    price: IProductPrice | null;
    props: IProductProps | null;
    default_category: IProductCategory | null;
    images: IImage[] | null;
    labels: ILabel[] | null;
    sort_price: string | number | null;
    sort_in_stock: number | null;
    deleted_at: string | null;
    in_stock: boolean;
}
export interface IProductPrice {
    value: number | null;
    min: number | null;
    max: number | null;
    old: number | null;
    old_min: number | null;
    old_max: number | null;
    currency_alias: string | null;
}

export interface IProductText {
    product_id: number | string;
    title: string;
    custom_title: string | null;
    custom_header: string | null;
    meta_description: string | null;
    url_key: string | null;
    description: string | null;
}

export interface IProductProps {
    available_qty: number | null;
    country_of_origin: number | null;
    extra: {
        [key: string]: any;
    } | null;
    size: IItemSize | null;
    characteristic: {
        [key: string]: any;
    } | null;
}

export interface ICartProduct {
    product_id: number | string;
    sku: string | null;
    has_variants: boolean;
    item_id: number | string;
    group_id: number | string;
    created_at: string;
    deleted_at: string | null;
    price: IProductPrice | null;
    external_id: number | string | null;
    created_by: number | string | null;
    text: IProductText;
    in_stock: boolean;
    images: IProductImage[];
}

export interface IItemSeo {
    compiledTitle: null | string;
    compiledMetaDescription: null | string;
    customTitle: null | string;
    customMetaDesc: null | string;
    title: string;
    metaDesc: null | string;
}

export interface IProductItem {
    product_id: number;
    sku: string | null;
    group_id: number;
    created_at: string;
    deleted_at: string | null;
    has_variants: boolean;
    external_id: number | string | null;
    created_by: number | null;
    price: IProductPrice | null;
    in_stock: boolean;
    item_id: number;
    text: IProductText;
    images: IProductImage[];
    props: IProductItemProps;
    categoryRels: IProductCategoryRels[];
    labels: ILabel[];
    nonVariantCharacteristics: INonVariantCaracteristic[];
    extendedVariants?: IExtendedVariants;
    seo: IItemSeo;
}

export interface IProductItemProps {
    product_id: number;
    available_qty: number;
    reserved_qty: number;
    layout: null;
    extra: {
        [key: string]: any;
    } | null;
    size: IItemSize | null;
    characteristic: {
        [key: string]: number[] | string;
    };
}