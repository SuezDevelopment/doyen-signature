import * as IGAPI from './'
import { IContext } from "./IContext"

const target = "signaturesbydoyen"

async function getContext(target:string): Promise<IContext> {
    const ctxFilename = `../ctx/${target}.json`
    let ctx = null
    try {
        // Tries to read the context from ctx path
        return require(ctxFilename)
    } catch (e) {
        // If not found, creating a new ctx
        ctx = await IGAPI.auth(target)
    }
    return ctx
}

export async function getAllSignaturesByDoyenPost(){
    await getContext(target).then(async(ctx) =>{
        const user = await IGAPI.getUser(target, ctx)
        const posts = await IGAPI.getAllUserPosts(user, ctx, {first: 12, after: null})
        return posts
    }).catch(e => console.log(e))
}