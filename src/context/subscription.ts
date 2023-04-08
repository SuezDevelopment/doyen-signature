export class Subscription {
	api: any
    constructor(api: any) {
        this.api = api
    }

    async get_subscriptions_count() {
        return await this.api.get(`subscribe/count`)
    }


    async new_subscription(obj:any) {
        return await this.api.post(`subscribe/new`,{
            body: JSON.stringify({
                first_name: obj.first_name,
                email: obj.email,
            })
        })
    }
}