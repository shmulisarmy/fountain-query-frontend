export function ws_url(url : string){
    if (url.startsWith("localhost")) {
        return `ws://${url}`;
    }
    console.assert(url.includes("."));
    return `wss://${url}`;
}


export function http_url(url : string){
    if (url.startsWith("localhost")) {
        return `http://${url}`;
    }
    console.assert(url.includes("."));
    return `https://${url}`;
}