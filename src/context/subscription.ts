export class Subscription {
	api: any
    constructor(api: any) {
        this.api = api
    }

    async get_subscriptions_count() {
        return await this.api.get(`subscribe/count`)
    }


    async new_subscription(first_name:string, email:string) {
        return await this.api.post(`subscribe/new`,{
            body: JSON.stringify({
                first_name: first_name,
                email: email,
            })
        })
    }
}