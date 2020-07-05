import { FETCHING_GEOCOORDINATES } from "../_util/enums";
import { getCurrentPosition } from "../../../_shared/navigator/getCurrentPosition";

export const getGeocoordinates = async (props) => {

    const {
        geocoordinates,
        setButtonState,
        setGeocoordinates,
    } = props;

    const hasBrowserSupport = Boolean(navigator.geolocation);
    const areFetchedAlready = Boolean(geocoordinates.latitude);

    if (areFetchedAlready) {
        return;
    }

    if (!hasBrowserSupport) {
        // throw browser support error
    }

    try {
        setButtonState(FETCHING_GEOCOORDINATES);
        const { coords } = await getCurrentPosition();
        setGeocoordinates(coords);
        return coords;
    }
    catch (error) {
        // throw permissions error
    }
}