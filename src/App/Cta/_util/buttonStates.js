import { INITIAL, ERROR, FETCHING_LOCATION, FETCHING_GAS_STATIONS } from "./enums";

export const buttonStates = [
    {
        state: INITIAL,
        text: 'Find local gas stations',
    },
    {
        state: FETCHING_LOCATION,
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