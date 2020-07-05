import React, { useState } from 'react';
import { GasStation } from './GasStation';

export const Table = (props) => {

    const [page, setPage] = useState(0);

    const stationsPerPage = 5;

    const {
        gasStations: allGasStations,
    } = props;

    const gasStations = allGasStations.slice( (page * stationsPerPage), stationsPerPage);

    return (
        <table>
            <thead>
                <tr>
                    <td className='logo'/>
                    <td>Distance</td>
                    <td>Station</td>
                    <td>Gas Price</td>
                </tr>
            </thead>
            <tbody>
                {gasStations.map( gasStation => (
                    <GasStation 
                        key={gasStation.id}
                        gasStation={gasStation} 
                    />
                ))}
            </tbody>
        </table>
    )
}