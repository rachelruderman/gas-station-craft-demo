import React, { useState } from 'react';
import { INITIAL } from './_util/enums';
import { buttonStates } from './_util/buttonStates';
import { Table } from './Table';
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
            ? `Five closest gas stations`
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
                <Table
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