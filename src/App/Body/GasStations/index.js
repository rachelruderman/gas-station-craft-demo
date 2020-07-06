import React, { useState } from 'react';
import { GasStation } from './GasStation';
import { RangeSlider } from './RangeSlider';
import { useInitialFilters } from './_hooks/useInitialFilters';
import { getMaxValue } from '../../../_shared/arrays/getMaxValue';
import { getMinValue } from '../../../_shared/arrays/getMinValue';
import { fuelTypes } from './_util/fuelTypes';

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
            `${filters.fuelType}_price`,
            'distance',
        ].map(type => {
            const min = getMinValue({array: allGasStations, property: type});
            const max = getMaxValue({array: allGasStations, property: type});
            const value = gasStations[4][type];

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
                            const className = (fuelType === filters.fuelType) ? 'active' : '';

                            return (
                                <button
                                    key={fuelType}
                                    className={className}
                                    onClick={onClick}
                                    type='button'>
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