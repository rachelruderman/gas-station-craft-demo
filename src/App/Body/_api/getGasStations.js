const apiDomain = process.env.REACT_APP_MY_GAS_FEED_API_DOMAIN;
const apiKey = process.env.REACT_APP_MY_GAS_FEED_API_KEY;

export const getGasStations = async (props) => {

    const {
        options,
    } = props;

    const { 
        latitude,
        longitude,
        sortBy = 'distance',
        fuelType = 'reg',
        distance = 5,
    } = options;

    const url = `http://${apiDomain}/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${apiKey}.json`;

    const response = await fetch(url);
    const { stations } = await response.json();
    return stations;
}