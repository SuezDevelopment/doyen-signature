import axios from "axios"
import { IContext } from "./IContext"
import { IPosts, IPost } from "./IPosts"
import { IUser } from "./IUser"


export async function getUser(username: string, ctx: IContext): Promise<IUser> {
    return (await axios.get(`https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`, { headers: ctx.headers })).data.data.user
}

export async function getUserPosts(user: IUser, ctx: IContext, { first, after }: { first: number, after: string | null }): Promise<IPosts> {
    const variables = encodeURIComponent(JSON.stringify({ id: user.id, first, after })),
        headers = ctx.headers

    return (await axios.get(`https://www.instagram.com/graphql/query/?query_hash=${ctx.queries.posts}&variables=${variables}`, { headers })).data.data.user
}

export async function getAllUserPosts(user: IUser, ctx: IContext, { first, after }: { first: number, after: string | null }): Promise<IPost[]> {
    const posts: IPost[] = []
    let fetch = null

    do {
        try {
            fetch = await getUserPosts(user, ctx, { first, after })
        } catch (e) {
            console.error(e)
            console.warn("Got Ratelimited")
            break
        }
        after = fetch.edge_owner_to_timeline_media.page_info.end_cursor
        posts.push(...fetch.edge_owner_to_timeline_media.edges)
    } while (fetch.edge_owner_to_timeline_media.page_info.has_next_page)
    return posts
}