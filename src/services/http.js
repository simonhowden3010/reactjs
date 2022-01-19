import * as apiconfig from './apiconfig.json';

const baseUri = apiconfig.baseApiUrl;

/* istanbul ignore file */

export const getInstalledSDKData = async (loc) => {
    const url = baseUri + loc;
    return await get(url);
}

const get = async (route) => {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    try {
        var result = await fetch(route, {
            method: "Get",
            headers
        });
        
        if (result.status !== 200) {
            throw new Error("Error posting to server");  
        }

        return await result.json();
    } catch(e) {
        console.log(e);
        throw new Error("Error posting to server");
    }
}
