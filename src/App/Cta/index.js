import React, { useState } from 'react';
import { INITIAL, FETCHING_LOCATION, ERROR } from './_util/enums';
import { buttonStates } from './_util/buttonStates';
import { getMyGasFeedApi } from './_api/getMyGasFeedApi';

export const Cta = () => {

    const initialButtonState = INITIAL;
    const initialPostalCode = undefined;
    
    const [buttonState, setButtonState] = useState(initialButtonState);
    const [postalCode, setPostalCode] = useState(initialPostalCode);

    const { text } = buttonStates.find( ({state}) => (state === buttonState));


    const getPostalCode = async () => {
        const { geolocation } = navigator;
        const isGeolocationSupported = Boolean(geolocation);

        if (isGeolocationSupported) {
            setButtonState(FETCHING_LOCATION);
            const response = await geolocation.getCurrentPosition( async ({coords}) => {
                const { latitude, longitude } = coords;
                return await getMyGasFeedApi({latitude, longitude});
            })

            console.log({response})
        }

        // return setButtonState(ERROR);
    }

    const onClick = () => {
        // pointer events are only enabled in INITIAL state
        setButtonState(FETCHING_LOCATION);
        const postalCode = getPostalCode();
    }
    return (
        <button
            type='button'
            id='cta'
            className={buttonState}
            onClick={onClick}
        >
            {text}
        </button>
    )
}