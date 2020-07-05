import React, { useState } from 'react';
import { GasStation } from './GasStation';
import { RangeSlider } from './RangeSlider';
import { useInitialFilters } from './_hooks/useInitialFilters';

export const Table = (props) => {

    const [page] = useState(0);

    const {
        gasStations: allGasStations,
    } = props;
    
    const [filters, setFilters] = useState({});
    console.log({filters})
    useInitialFilters({allGasStations, setFilters});
    
    const stationsPerPage = 5;

    const gasStations = allGasStations.slice( (page * stationsPerPage), stationsPerPage);

    const renderTable = () => {
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

    const renderFilters = () => {
        return (
            <div>
                Max Price <RangeSlider/>
                Max Distance <RangeSlider/>
                Fuel Type <RangeSlider/>
            </div>
        )
    }

    return (
        <div>
            {renderFilters()}
            {renderTable()}
        </div>
    )
}