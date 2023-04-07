export class Subscription {
	api: any
    get_key:string
    post_key:string
    constructor(api: any, get_key:string, post_key:string) {
        this.api = api
        this.get_key = get_key
        this.post_key = post_key
    }

    async get_subscriptions_count() {
        return await this.api.get(`subscribe/count?get_key=${this.get_key}`)
    }


    async new_subscription(obj:any) {
        return await this.api.post(`subscribe/new?post_key=${this.post_key}`,{
            body: JSON.stringify({
                first_name: obj.first_name,
                email: obj.email,
            })
        })
    }
}