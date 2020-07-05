import { useEffect } from "react"
import { getGasStations } from "../_api/getGasStations"
import { FETCHING_GAS_STATIONS, ERROR_TIMEOUT, ERROR_NO_RESULTS } from "../_util/enums";

export const useFetchGasStations = (props) => {
    const { setButtonState, setGasStations, geocoordinates } = props;
    const { latitude, longitude} = geocoordinates;

    useEffect( () => {
        const apiCall = async () => {
            try {
                setButtonState(FETCHING_GAS_STATIONS);
                const response = await getGasStations ({options: {latitude, longitude}});
                setGasStations(response);
            }
            catch (error) {
                const errorType = (error.code === '408')
                    ? ERROR_TIMEOUT
                    : ERROR_NO_RESULTS;
                setButtonState(errorType);
            }
        }

        const shouldFetchStations = Boolean(latitude || longitude);
        if (shouldFetchStations) {
            apiCall();
        }

    // eslint-disable-next-line
    }, [latitude, longitude])
}