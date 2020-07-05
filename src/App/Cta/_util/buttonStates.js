import { INITIAL, CLICKED, ERROR } from "./enums";

export const buttonStates = [
    {
        state: INITIAL,
        text: 'Find local gas stations',
    },
    {
        state: CLICKED,
        text: 'Fetching location...',
        rotatingText: [
            'Searching area...',
            'Checking prices...',
            'Almost there...'
        ]
    },
    {
        state: ERROR,
        text: 'Something went wrong!',
    }
]