import axios from "axios";

export const commanrequest = async (method, url, body, headers) => {
    const config = {
        method: method,
        url: url,
        data: body,
        headers: headers || { " Content-Type ": "application/json"},

    };

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        console.error(error);
        
    }
    }



