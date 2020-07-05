import React, { useState } from 'react';
import { INITIAL } from './_util/enums';
import { buttonStates } from './_util/buttonStates';
import { Modal } from './Modal';
import { getGeocoordinates } from './_api/getGeocoordinates';
import { getGasStations } from './_api/getGasStations';

export const Cta = () => {
    
    const [buttonState, setButtonState] = useState(INITIAL);
    const [showModal, setShowModal] = useState(false);
    const [geocoordinates, setGeocoordinates] = useState({});
    const [gasStations, setGasStations] = useState([]);
    const [filters, setFilters] = useState({});

    const { text } = buttonStates.find( ({state}) => (state === buttonState));

    const renderCta = () => {
        const onClick = async () => {
            try {
                const coords = await getGeocoordinates({
                    geocoordinates,
                    setButtonState,
                    setGeocoordinates
                });

                await getGasStations({
                    options: {coords},
                    setButtonState,
                    setGasStations
                });

                setShowModal(true);
            }
            catch (error) {
                // show error banner
            }
        }

        const buttonText = (gasStations.length)
            ? `Your closest gas stations`
            : text;

        return (
            <button
                type='button'
                id='cta'
                className={buttonState}
                onClick={onClick}
            >
            {buttonText}
        </button>
        )
    }

    const renderModal = () => {
        if (gasStations.length) {
            return (
                <Modal
                    gasStations={gasStations}
                    geocoordinates={geocoordinates}
                />
            )
        }
    }

    return (
        <>
            {renderCta()}
            {renderModal()}
        </>
    )
}