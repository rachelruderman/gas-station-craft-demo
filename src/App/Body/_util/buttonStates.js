export const INITIAL = 'initial';
export const FETCHING_GEOCOORDINATES = 'fetching_geocoordinates';
export const FETCHING_GAS_STATIONS = 'fetching_gas_stations';
export const ERROR = 'error';
export const ERROR_BROWSER_PERMISSION = 'error_browser_permission';
export const ERROR_BROWSER_SUPPORT = 'error_browser_support';
export const ERROR_TIMEOUT = 'error_timeout';
export const ERROR_NO_RESULTS = 'error_no_results';
export const ERROR_GENERIC = 'error_generic';

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
        text: '😿 Browser permission denied',
    },
    {
        state: ERROR_BROWSER_SUPPORT,
        text: '😿 Browser not supported',
    },
    {
        state: ERROR_TIMEOUT,
        text: '😿 Operation timed out',
    },
    {
        state: ERROR_NO_RESULTS,
        text: '😿 No gas stations found',
    },
    {
        state: ERROR_GENERIC,
        text: '😿 Something went wrong!',
    },
]