import axios from 'axios';

const X_RAPIDAPI_KEY = 'e42deb1a7amsh39fe1a63df9f61cp192bfbjsn4378f1d52d1e';

const options = (method='GET', params={q: '53.1,-0.13'}) => {
    return {
        method: method,
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        headers: {
            'x-rapidapi-key': X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        },
        params: params,
    }
}

export async function getWeatherNow(params={q: '53.1,-0.13'}) {
    const newOptions = options(undefined, params);

    try {
        const response = await axios.request(newOptions);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}