
export class Cart {
    api: any
    cartId: string
    get_key:string
    post_key:string
    constructor(api: any, get_key:string, post_key:string) {
        this.api = api
        this.cartId = ''
        this.get_key = get_key
        this.post_key = post_key
    }

    async getCartInfo(cartId: any){
        this.cartId += cartId;
        try {
            const res = await this.api.get(`store/cart?cart_id=${this.cartId}&get_key=${this.get_key}`)
            return res.cart_info
        } catch (error:any) {
            return error.message
        }
    }

    async retrieveCart(){
        // get cart info from user session and retrieve it
       try {
        const res = await this.api.get(`store/cart?cart_id=${this.cartId}&get_key=${this.get_key}`)
        return res.cart_info
       } catch (error:any) {
        return error.message
       }
    }

    async addItemToCart(cartId: string, itemId: number, qty:number){
        try {
            const res = await this.api.post(`store/cart?post_key=${this.post_key}`,{
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