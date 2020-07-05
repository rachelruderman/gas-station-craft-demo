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
    const [gasStations, setGasStations] = useState({});
    const [filters, setFilters] = useState({});

    const { text } = buttonStates.find( ({state}) => (state === buttonState));


    const renderCta = () => {
        const onClick = async () => {
            try {
                await getGeocoordinates({
                    geocoordinates,
                    setButtonState,
                    setGeocoordinates
                });

                await getGasStations({
                    options: {...geocoordinates},
                    setButtonState,
                    setGasStations
                });

                setShowModal(true);
            }
            catch (error) {
                // show error banner
            }
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

    const renderModal = () => {
        if (showModal) {
            return <Modal setShowModal={setShowModal}/>
        }
    }

    return (
        <>
            {renderCta()}
            {renderModal()}
        </>
    )
}