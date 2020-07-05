import axios from 'axios';

const apiDomain = process.env.REACT_APP_MY_GAS_FEED_API_DOMAIN;
const apiKey = process.env.REACT_APP_MY_GAS_FEED_API_KEY;

// http://www.mygasfeed.com/keys/api
export const getMyGasFeedApi = async (data) => {
    const { 
        latitude,
        longitude,
        sortBy = 'distance',
        fuelType = 'reg',
        distance = 5,
    } = data;

    const url = `http://${apiDomain}/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${apiKey}.json`;

    return await axios.get(url);
}