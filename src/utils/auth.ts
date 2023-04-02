/**
 * This file will contain all methods required to build the most efficient
 * headers dictionnary using information stored into Instagram webpage such
 * as X-ASBD-ID, X-IG-App-ID, X-IG-WWW-Claim, X-Mid, X-Requested-With and
 * X-Web-Device-Id .
 *
 * node-html-parser will be a usefull npm module because most of those
 * informations are stored into the HTML itself.
 */

import axios from "axios"
import HTMLParser from "node-html-parser"
import { IContext } from "./IContext"

const defaultHeaders = {
    Host: "www.instagram.com",
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate, br",
    "Alt-Used": "www.instagram.com",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "cross-site",
    Pragma: "no-cache",
    "Cache-Control": "no-cache",
    TE: "trailers",
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    return Math.floor(Math.random() * (Math.floor(max) - min)) + min
}

function craftCookie(headers: any): string {
    return `csrftoken=${headers["X-CSRFToken"]}; mid=${headers["X-Mid"]}; ig_did=${headers["X-Web-Device-Id"]}`
}

function getScripts(html: string): string[] {
    return Array.from(HTMLParser(html).querySelectorAll('link[rel="preload"][as="script"]')).map((e) => e.getAttribute("href") || "")
}

async function getUserPage(username: string): Promise<string> {
    return (
        await axios.get(`https://www.instagram.com/${username}/`, {
            headers: defaultHeaders,
        })
    ).data
}

async function getIGABSDId(html: string): Promise<number> {
    const scripts = getScripts(html)
    let ASBD_ID = null,
        magicScript = null

    for (const url of scripts) {
        try {
            magicScript = (await axios.get(url)).data
        } catch (e) {
            continue
        }
        ASBD_ID = /\w+="(\d+)";\w+.ASBD_ID=\w+/gm.exec(magicScript)?.at(1)
        if (ASBD_ID)
            break
    }
        
    if (!ASBD_ID)
        throw new Error("Unable to find the ASBD ID.")
    return parseInt(ASBD_ID)
}

async function getQueries(html: string): Promise<string[]> {
    const scripts = getScripts(html)
    let match = null,
        magicScript = null

    for (const url of scripts) {
        try {
            magicScript = (await axios.get(url)).data
        } catch (e) {
            continue
        }
        match = [...magicScript.matchAll(/[a-f0-9]{32}/gm)]
        if (match && match.length >= 2)
            break
    }

    if (!match || match.length < 2) throw new Error("Unable to find queries in magic script.")

    const posts = match[0][0]
    if (!posts) throw new Error("Unable to find posts query hash.")

    const highlights = match[1][0]
    if (!highlights) throw new Error("Unable to find highlights query hash.")

    const docId =
        /^__d\("PolarisCookieModalActions",\[["A-Za-z0-9\-\.,]+\],\(function\(.+\)\{"use strict";.+"(\d+)"/gm
            .exec(magicScript)
            ?.at(1)
    if (!docId) throw new Error("Unable to find docId.")

    return [posts, highlights, docId]
}

function getCSRFToken(html: string): string {
    const csrfToken = /\\"csrf_token\\":\\"(\w+)\\"/gm.exec(html)?.at(1)
    if (!csrfToken) throw new Error("Unable to find CSRF token.")

    return csrfToken
}

function getIGAppId(html: string): number {
    const appId = /"X-IG-App-ID":"(\d+)"/gm.exec(html)?.at(1)
    if (!appId) throw new Error("Unable to find the app ID.")

    return parseInt(appId)
}

function getTargetId(html: string): number {
    const targetId = /"props":{"id":"(\d+)"/gm.exec(html)?.at(1)
    if (!targetId) throw new Error("Unable to find the target ID.")

    return parseInt(targetId)
}

async function getIGWWWClaim(
    targetId: number,
    deviceId: string,
    ASBDId: number,
    IGAppId: number,
    XMid: string
): Promise<string> {
    const reqHeaders = {
            ...defaultHeaders,
            "X-Web-Device-Id": deviceId,
            "X-ASBD-ID": ASBDId.toString(),
            "X-IG-App-ID": IGAppId.toString(),
            "X-Mid": XMid,
            "X-Requested-With": "XMLHttpRequest",
        },
        { headers } = await axios.get(
            `https://www.instagram.com/api/v1/web/get_ruling_for_content/?content_type=PROFILE&target_id=${targetId}`,
            { headers: reqHeaders }
        )

    if (headers["access-control-expose-headers"] == "X-IG-Set-WWW-Claim")
        return "0"

    throw new Error("Unable to find X-IG-Set-WWW-Claim header.")
}

function getIgDeviceId(html: string): string {
    const did = /"_js_ig_did":{"value":"([A-F0-9\-]+)"/gm.exec(html)?.at(1)
    if (!did) throw new Error("Unable to find the device ID.")

    return did
}

function getIgAjax(html: string): number {
    const ajax = /"app_version":"\d+.\d+.\d+.\d+ \((\d+)\)"/gm.exec(html)?.at(1)
    if (!ajax) throw new Error("Unable to find AJAX version.")

    return parseInt(ajax)
}

function buildXMid(): string {
    let token: string = ""
    const min = Math.pow(2, 29),
        max = Math.pow(2, 32)

    for (let i: number = 0; i < 8; i++)
        token += getRandomInt(min, max).toString(36)
    return token
}

async function grpahQLAuth(ctx: IContext, docId: string): Promise<boolean> {
    let headers = {
        Host: "graphql.instagram.com",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0",
        Accept: "*/*",
        "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Mid": ctx.headers["X-Mid"],
        "X-Instagram-AJAX": ctx.headers["X-Instagram-AJAX"],
        "X-IG-App-ID": ctx.headers["X-IG-App-ID"],
        "X-ASBD-ID": ctx.headers["X-ASBD-ID"],
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://www.instagram.com",
        DNT: "1",
        Connection: "keep-alive",
        Referer: "https://www.instagram.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        TE: "trailers",
    }
    const variables = JSON.stringify({
            ig_did: ctx.headers["X-Web-Device-Id"],
            first_party_tracking_opt_in: true,
            third_party_tracking_opt_in: false,
            input: { client_mutation_id: 0 },
        }),
        res = (
            await axios.post(
                "https://graphql.instagram.com/graphql/",
                { doc_id: docId, variables },
                {
                    headers,
                }
            )
        ).data
    return res.data.ig_browser_terminal_consent_mutation.success
}

export default async (target: string): Promise<IContext> => {
    const page = await getUserPage(target),
        target_id = getTargetId(page),
        ig_app_id = getIGAppId(page),
        ig_did = getIgDeviceId(page),
        ig_ajax = getIgAjax(page),
        csrftoken = getCSRFToken(page),
        ig_mid = buildXMid(),
        ig_asbd_id = await getIGABSDId(page),
        [posts, highlights, docId] = await getQueries(page)

    const ig_www_claim = await getIGWWWClaim(
        target_id,
        ig_did,
        ig_asbd_id,
        ig_app_id,
        ig_mid
    )
    if (!ig_www_claim) throw new Error("Unable to fetch the WWW-Claim value.")

    const headers = {
        ...defaultHeaders,
        "X-Mid": ig_mid,
        "X-IG-App-ID": ig_app_id.toString(),
        "X-ASBD-ID": ig_asbd_id.toString(),
        "X-IG-WWW-Claim": ig_www_claim,
        "X-Web-Device-Id": ig_did,
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": csrftoken,
        "X-Instagram-AJAX": ig_ajax.toString(),
        Referer: `https://www.instagram.com/${target}/`,
        Cookie: "",
    }
    headers["Cookie"] = craftCookie(headers)
    const ctx = {
        queries: {
            posts,
            highlights,
        },
        headers,
    }
    if (!(await grpahQLAuth(ctx, docId)))
        console.warn(`Unable to auth to GraphQL (docId: ${docId})`)
    return ctx
}