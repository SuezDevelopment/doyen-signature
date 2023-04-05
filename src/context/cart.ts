import {ICategory} from 'boundless-api-client';
export class Cart {
    api: any
    constructor(api: any) {
        this.api = api
    }

    async getCartInfo(cartId: any){
        let arg: any
        let cardInfo = {
            ...arg
        }
        return cardInfo
    }

    async retrieveCart(){

    }

    async addItemToCart(cartId: string, itemId: number, qty:number){
        let product, actionRequired, cartTotal, added
        return {product, actionRequired, cartTotal, added}
    }
}