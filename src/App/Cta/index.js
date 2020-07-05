import React, { useState } from 'react';
import { INITIAL, FETCHING_GEOCOORDINATES } from './_util/enums';
import { buttonStates } from './_util/buttonStates';
import { Modal } from './Modal';
import { getCurrentPosition } from '../../_shared/navigator/getCurrentPosition';

export const Cta = () => {
    
    const [buttonState, setButtonState] = useState(INITIAL);
    const [showModal, setShowModal] = useState(false);
    const [geocoordinates, setGeocoordinates] = useState({});

    const { text } = buttonStates.find( ({state}) => (state === buttonState));

    const fetchGeocoordinates = async () => {
        const hasBrowserSupport = Boolean(navigator.geolocation);
        const areFetchedAlready = Boolean(geocoordinates.latitude);

        if (areFetchedAlready) {
            return;
        }

        if (!hasBrowserSupport) {
            // throw browser support error
        }

        try {
            setButtonState(FETCHING_GEOCOORDINATES);
            const { coords } = await getCurrentPosition();
            setGeocoordinates(coords);
        }
        catch (error) {
            // throw permissions error
        }
    }

    const renderCta = () => {
        const onClick = async () => {
            await fetchGeocoordinates();
            setShowModal(true);
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