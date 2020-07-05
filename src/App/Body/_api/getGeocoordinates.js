import { FETCHING_GEOCOORDINATES, ERROR_BROWSER_SUPPORT, ERROR_BROWSER_PERMISSION } from "../_util/enums";
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
        setButtonState(ERROR_BROWSER_SUPPORT);
        return;
    }

    try {
        setButtonState(FETCHING_GEOCOORDINATES);
        const { coords } = await getCurrentPosition();
        setGeocoordinates(coords);
        return coords;
    }
    catch (error) {
        setButtonState(ERROR_BROWSER_PERMISSION); 
    }
}