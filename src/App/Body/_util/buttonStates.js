import { INITIAL, ERROR_BROWSER_PERMISSION, ERROR_BROWSER_SUPPORT, FETCHING_GAS_STATIONS, FETCHING_GEOCOORDINATES } from "./enums";

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
        state: ERROR_BROWSER_PERMISSION,
        text: ':( Browser permission denied',
    },
    {
        state: ERROR_BROWSER_SUPPORT,
        text: ':( Browser not supported',
    },
]