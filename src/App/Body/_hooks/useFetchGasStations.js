import { useEffect } from "react"
import { getGasStations } from "../_api/getGasStations"
import { FETCHING_GAS_STATIONS, ERROR_NO_RESULTS } from "../_util/buttonStates";
import myGasFeedResponse from '../_util/myGasFeedResponse.json';

export const useFetchGasStations = (props) => {
    const { setButtonState, setGasStations, geocoordinates } = props;
    const { latitude, longitude} = geocoordinates;

    useEffect( () => {
        const apiCall = async () => {
            try {
                setButtonState(FETCHING_GAS_STATIONS);
                const response = await getGasStations ({options: {latitude, longitude}});
                (response.length)
                    ? setGasStations(response)
                    : setButtonState(ERROR_NO_RESULTS);
            }
            catch (error) {
                // This will always throw an error because the site is HTTPS and MyGasFeed is HTTP
                // Return hardcoded response instead

                setGasStations(myGasFeedResponse.stations);

                // switch (error.code) {
                //     case ('408'):
                //         setButtonState(ERROR_TIMEOUT);
                //         break;
                //     default:
                //         setButtonState(ERROR_GENERIC);
                // }
            }
        }

        const shouldFetchStations = Boolean(latitude || longitude);
        if (shouldFetchStations) {
            apiCall();
        }

    // eslint-disable-next-line
    }, [latitude, longitude])
}