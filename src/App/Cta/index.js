import React, { useState } from 'react';
import { INITIAL, CLICKED } from './_util/enums';
import { buttonStates } from './_util/buttonStates';

export const Cta = () => {

    const [buttonState, setButtonState] = useState(INITIAL);

    const { text } = buttonStates.find( ({state}) => (state === buttonState));

    return (
        <button
            type='button'
            id='cta'
            className={buttonState}
            onClick={() => setButtonState(CLICKED)}
        >
            {text}
        </button>
    )
}