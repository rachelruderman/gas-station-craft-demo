import React, { useState } from 'react';

export const Modal = (props) => {

    const [page, setPage] = useState(0);

    const stationsPerPage = 7;

    const {
        gasStations: allGasStations,
    } = props;

    const gasStations = allGasStations.slice( (page * stationsPerPage), stationsPerPage);

    console.log({gasStations})

    return (
        <ul id='cta'>
            {gasStations.map(gasStation => {
                const { station, id, address, distance, city, zip, country} = gasStation;
                
                const name = (station === 'Unbranded')
                    ? `There's one`
                    : `${station} is`;
                
                const miles = (distance === '1 miles')
                    ? '1 mile'
                    : distance;

                const urlEscapedAddress = `${address} ${city} ${zip} ${country}`.replace(/ /g, '+');
                const href = `https://www.google.com/maps/dir/?api=1&destination=${urlEscapedAddress}&travelmode=driving`;

                return (
                    <li key={id}>
                        {name} {miles} away at{` `}
                        <a href={href} alt='directions' target='_blank' rel='noopener noreferrer'>
                            {address}
                        </a> 
                    </li>
                )
            })}
        </ul>
    )
}