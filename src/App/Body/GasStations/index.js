import React, { useState } from 'react';
import { GasStation } from './GasStation';
import { RangeSlider } from './RangeSlider';
import { useInitialFilters } from './_hooks/useInitialFilters';
import { getMaxValue } from '../../../_shared/arrays/getMaxValue';
import { getMinValue } from '../../../_shared/arrays/getMinValue';
import { REGULAR, fuelTypes } from './_util/fuelTypes';

export const GasStations = (props) => {
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
                type: `${filters.fuelType}_price`
            },
            {
                type: 'distance',
            },
            {
                type: 'fuelType',
                min: 1,
                max: 3,
                value: filters.fuelType,
            },
        ].map(rangeSlider => {
            const { 
                type,
                min = getMinValue({array: allGasStations, property: type}),
                max = getMaxValue({array: allGasStations, property: type}),
                value = gasStations[4][rangeSlider.type],
             } = rangeSlider;

            return ({
                type,
                min,
                max,
                value
            })
        })

        console.log({rangeSliders, filters})

        const renderFuelTypes = () => {
            return (
                <div>
                    Fuel Types
                    <div id='fuel-types'>
                        {fuelTypes.map(fuelType => {
                            const onClick = () => updateFilter({fuelType});
                            return (
                                <button key={fuelType} onClick={onClick} type='button'>
                                    {fuelType}
                                </button>
                            )
                        })}
                    </div>
                </div>
            )
        }

        return (
            <div>
                {rangeSliders.map(rangeSlider => (
                    <RangeSlider
                        updateFilter={updateFilter}
                        key={rangeSlider.type}
                        rangeSlider={rangeSlider}
                    />
                ))}
                {renderFuelTypes()}
            </div>
        )
    }

    return (
        <div id='gas-stations'>
            {renderFilters()}
            {renderTable()}
        </div>
    )
}