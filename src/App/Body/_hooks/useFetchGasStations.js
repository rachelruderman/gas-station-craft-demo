import { useEffect } from "react"
import { getGasStations } from "../_api/getGasStations"
import { FETCHING_GAS_STATIONS, ERROR_TIMEOUT, ERROR_NO_RESULTS, ERROR_GENERIC } from "../_util/enums";

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
                switch (error.code) {
                    case ('408'):
                        setButtonState(ERROR_TIMEOUT);
                        break;
                    default:
                        setButtonState(ERROR_GENERIC);
                }
            }
        }

        const shouldFetchStations = Boolean(latitude || longitude);
        if (shouldFetchStations) {
            apiCall();
        }

    }, [latitude, longitude])
}