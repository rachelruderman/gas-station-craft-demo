import { FETCHING_GAS_STATIONS } from "../_util/enums";

const apiDomain = process.env.REACT_APP_MY_GAS_FEED_API_DOMAIN;
const apiKey = process.env.REACT_APP_MY_GAS_FEED_API_KEY;

export const getGasStations = async (props) => {

    const {
        options,
        setButtonState,
        setGasStations,
    } = props;

    const { 
        coords,
        sortBy = 'distance',
        fuelType = 'reg',
        distance = 5,
    } = options;

    const {
        latitude,
        longitude,
    } = coords;

    setButtonState(FETCHING_GAS_STATIONS);

    const url = `https://${apiDomain}/stations/radius/${latitude}/${longitude}/${distance}/${fuelType}/${sortBy}/${apiKey}.json`;

    const response = await fetch(url);
    const responseData = await response.json();

    setGasStations(responseData);
}