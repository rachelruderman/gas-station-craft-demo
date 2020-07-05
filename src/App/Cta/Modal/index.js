import React from 'react';

export const Modal = (props) => {

    const {
        gasStations,
    } = props;

    console.log({gasStations})

    return (
        <ul>
            {gasStations.map(gasStation => {
                const { station, id, address, distance} = gasStation;
                
                const name = (station === 'Unbranded')
                    ? 'A mystery gas station'
                    : station;

                return (
                    <li key={id}>
                        {name} is {distance} away at {address} 
                    </li>
                )
            })}
        </ul>
    )
}