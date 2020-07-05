import { INITIAL, ERROR, FETCHING_GAS_STATIONS, FETCHING_GEOCOORDINATES } from "./enums";

export const buttonStates = [
    {
        state: INITIAL,
        text: 'Find local gas stations',
    },
    {
        state: FETCHING_GEOCOORDINATES,
        text: 'Fetching location...',
    },
    {
        state: FETCHING_GAS_STATIONS,
        text: 'Checking prices...',
    },
    {
        state: ERROR,
        text: 'Something went wrong!',
    },
]