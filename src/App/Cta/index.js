import React, { useState } from 'react';
import { INITIAL, FETCHING_LOCATION, ERROR } from './_util/enums';
import { buttonStates } from './_util/buttonStates';

export const Cta = () => {

    const initialButtonState = INITIAL;
    const initialPostalCode = undefined;
    
    const [buttonState, setButtonState] = useState(initialButtonState);
    const [postalCode, setPostalCode] = useState(initialPostalCode);

    const { text } = buttonStates.find( ({state}) => (state === buttonState));


    const getPostalCode = () => {
        const { geolocation } = navigator;
        const isGeolocationSupported = Boolean(geolocation);

        if (isGeolocationSupported) {
            geolocation.getCurrentPosition( (position) => {
                console.log({position})
            })
        }

        return setButtonState(ERROR);
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