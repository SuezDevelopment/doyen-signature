import {IImageItem} from './image'

export interface ICategory {
    category_id: number;
    parent_id: number | null;
    title: string;
    url_key: string | null;
    tree_sort: string | null;
    level: number;
    image?: IImageItem | null;
    custom_link: string | null;
    children?: ICategory[] | null;
}