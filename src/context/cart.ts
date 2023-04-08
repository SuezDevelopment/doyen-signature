
export class Cart {
    api: any
    cartId: string
    constructor(api: any) {
        this.api = api
        this.cartId = ''
    }

    async getCartInfo(cartId: any){
        this.cartId += cartId;
        try {
            const res = await this.api.get(`store/cart?cart_id=${this.cartId}`)
            return res.cart_info
        } catch (error:any) {
            return error.message
        }
    }

    async retrieveCart(){
        // get cart info from user session and retrieve it
       try {
        const res = await this.api.get(`store/cart?cart_id=${this.cartId}`)
        return res.cart_info
       } catch (error:any) {
        return error.message
       }
    }

    async addItemToCart(cartId: string, itemId: number, qty:number){
        try {
            const res = await this.api.post(`store/cart`,{
                body: JSON.stringify({
                    cart_id: cartId,
                    item_id: itemId,
                    quantity: qty
                })
            })
            const {product, actionRequired, cartTotal, added} = await res.cart_info
            return {product, actionRequired, cartTotal, added}
        } catch (error:any) {
            return error.message
        }
    }
}