import React, { useState } from 'react';

export const Modal = (props) => {

    const [page, setPage] = useState(0);

    const stationsPerPage = 5;

    const {
        gasStations: allGasStations,
    } = props;

    const gasStations = allGasStations.slice( (page * stationsPerPage), stationsPerPage);

    console.log({gasStations})

    return (
        <table id='cta'>
            <thead>
                <tr>
                    <td>Distance</td>
                    <td>Station</td>
                    <td>Gas Price</td>
                </tr>
            </thead>
            <tbody>
                {gasStations.map(gasStation => {
                    const {
                        station,
                        id,
                        address,
                        distance,
                        city,
                        zip,
                        country,
                        reg_price
                    } = gasStation;
                    
                    const name = (station === 'Unbranded')
                        ? `Mystery station`
                        : station;
                    
                    const miles = (distance === '1 miles')
                        ? '1 mile'
                        : distance;

                    const urlEscapedAddress = `${address} ${city} ${zip} ${country}`.replace(/ /g, '+');
                    const href = `https://www.google.com/maps/dir/?api=1&destination=${urlEscapedAddress}&travelmode=driving`;

                    return (
                        <tr key={id}>
                            <td>{miles}</td>
                            <td>
                                <a href={href} alt='directions' target='_blank' rel='noopener noreferrer'>
                                    {name}
                                </a>
                            </td>
                            <td>${reg_price}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}