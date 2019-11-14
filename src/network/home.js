import {request} from "./request";

export function getHomeMultidata() {
    return request({
        url: '/hello/home'
    })
}