import React, { useState } from 'react';
import { GasStation } from './GasStation';
import { RangeSlider } from './RangeSlider';
import { useInitialFilters } from './_hooks/useInitialFilters';
import { getMaxValue } from '../../../_shared/arrays/getMaxValue';
import { getMinValue } from '../../../_shared/arrays/getMinValue';
import { REGULAR } from './_util/enums';
import { extractNumber } from '../../../_shared/strings/extractNumber';

export const Table = (props) => {
    const {
        gasStations: allGasStations,
    } = props;

    const stationsPerPage = 5;

    const [page] = useState(0); // todo: add pagination
    
    const [filters, setFilters] = useState({});
    
    const updateFilter = (data) => setFilters(prevState => ({...prevState, ...data}));

    useInitialFilters({allGasStations, setFilters});    

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
        const rangeSliders = [
            {
                type: `${filters.fuelType}_price`,
            },
            {
                type: 'distance',
            },
            {
                type: 'fuelType',
                min: 1,
                max: 3,
                initialValue: REGULAR,
            },
        ].map(rangeSlider => {
            const { 
                type,
                min = getMinValue({array: allGasStations, property: type}),
                max = getMaxValue({array: allGasStations, property: type}),
                initialValue = extractNumber(gasStations[0][type]),
             } = rangeSlider;

            return ({
                type,
                min,
                max,
                initialValue,
            })
        })

        console.log({rangeSliders})

        return (
            <div>
                {rangeSliders.map(rangeSlider => (
                    <RangeSlider
                        value={filters[rangeSlider.type]}
                        updateFilter={updateFilter}
                        key={rangeSlider.type}
                        rangeSlider={rangeSlider}
                    />
                ))}
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