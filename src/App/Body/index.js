import React, { useState } from 'react';
import { buttonStates, INITIAL } from './_util/buttonStates';
import { GasStations } from './GasStations';
import { getGeocoordinates } from './_api/getGeocoordinates';
import { useFetchGasStations } from './_hooks/useFetchGasStations';

export const Body = () => {
    
    const [buttonState, setButtonState] = useState(INITIAL);
    const [geocoordinates, setGeocoordinates] = useState({});
    const [gasStations, setGasStations] = useState([]);

    const { text } = buttonStates.find( ({state}) => (state === buttonState));

    useFetchGasStations ({geocoordinates, setButtonState, setGasStations});

    const renderCta = () => {
        const onClick = () => {
            getGeocoordinates({
                geocoordinates,
                setButtonState,
                setGeocoordinates
            });
        }

        const buttonText = (gasStations.length)
            ? `5 closest gas stations`
            : text;

        return (
            <button
                data-testid='cta-button'
                type='button'
                id='cta'
                className={buttonState}
                onClick={onClick}
            >
            {buttonText}
        </button>
        )
    }

    const renderGasStations = () => {
        if (gasStations.length) {
            return (
                <GasStations
                    gasStations={gasStations}
                    geocoordinates={geocoordinates}
                />
            )
        }
        return null;
    }

    return (
        <div id='body'>
            {renderCta()}
            {renderGasStations()}
        </div>
    )
}