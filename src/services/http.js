import * as apiconfig from './apiconfig.json';

const baseUri = apiconfig.baseApiUrl;

/* istanbul ignore file */

export const apiUrl = () => {
    return baseUri;
}

// const post = async (route, data) => {
//     const headers = { };

//     try {
//         var result = await fetch(baseUri + route, {
//             mode: 'cors',
//             method: "POST",
//             body: data,
//             headers 
//         });
//         return await result.json();
//     }
//     catch
//     {
//         console.log("Error posting to server");
//         return {
//             status: "Unexpected error posting to server"
//         }
//     }
// }

// const get = async (route) => {
//     return await getBlobOrJson(route, false);
// }

// const getBlobOrJson = async (route, getBlob) => {
//     const headers = { };

//     try {
//         var result = await fetch(baseUri + route, {
//             mode: 'cors',
//             method: "Get",
//             headers 
//         });
        
//         if (result.status !== 200) {
//             throw new Error("Error posting to server");  
//         }
        
//         if (getBlob) return await result.blob();

//         return await result.json();
//     } catch(e) {
//         throw new Error("Error posting to server");
//     }
// }

// const getBlobOrJsonFile = async (route, getBlob, data) => {
//      const headers = { };

//     try {
//         var result = await fetch(baseUri + route, {
//             mode: 'cors',
//             method: "Post",
//             body: data,
//             headers 
//         });
        
//         if (result.status !== 200) {
//             throw new Error("Error posting to server");  
//         }
//         if (getBlob) return await result.blob();

//         return await result.json();
//     } catch(e) {
//         new Error("Error posting to server");
//     }
// }

