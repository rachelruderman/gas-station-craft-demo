import React, { useState } from 'react';
import { capitalCase } from 'change-case';
import { GasStation } from './GasStation';
import { RangeSlider } from './RangeSlider';
import { useInitialFilters } from './_hooks/useInitialFilters';
import { getMaxValue } from '../../../_shared/arrays/getMaxValue';
import { getMinValue } from '../../../_shared/arrays/getMinValue';
import { fuelTypes } from './_util/fuelTypes';
import { extractNumber } from '../../../_shared/strings/extractNumber';

export const GasStations = (props) => {
    const {
        gasStations: allGasStations,
    } = props;

    const stationsPerPage = 5;

    const [page] = useState(0); // todo: add pagination
    
    const [filters, setFilters] = useState({});
    
    const updateFilter = (data) => setFilters(prevState => ({...prevState, ...data}));

    useInitialFilters({allGasStations, setFilters});    

    if (!filters.fuelType) {
        return null;
    }

    const priceProperty = `${filters.fuelType}_price`;

    const gasStations = allGasStations
        .filter(gasStation => {
            const isMatchDistance = (extractNumber(gasStation.distance) < filters.maxDistance);
            const isMatchPrice = (gasStation[priceProperty] !== 'N/A') && (extractNumber(gasStation[priceProperty]) < filters.maxPrice);
            return (isMatchDistance && isMatchPrice);
        })
        .slice( (page * stationsPerPage), stationsPerPage);

    const renderTable = () => {
        const lowestPrice = getMinValue({
            array: gasStations,
            property: priceProperty
        });

        return (
            <table>
                <thead>
                    <tr>
                        <td className='logo'/>
                        <td>Distance</td>
                        <td>Station</td>
                        <td>{capitalCase(priceProperty)}</td>
                    </tr>
                </thead>
                <tbody>
                    {gasStations.map( gasStation => {
                        const hasLowestPrice = (gasStation[priceProperty] === lowestPrice.toString());
                        const className = (hasLowestPrice) ? 'lowest-price' : '';
                        return (
                            <GasStation
                                key={gasStation.id}
                                priceProperty={priceProperty}
                                className={className}
                                fuelType={filters.fuelType}
                                gasStation={gasStation} 
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const renderFilters = () => {
        const rangeSliders = [
            { type: priceProperty, filterKey: 'maxPrice' },
            { type: 'distance', filterKey: 'maxDistance' },
        ].map( ({type, filterKey}) => {
            const min = getMinValue({array: allGasStations, property: type}).toString();
            const max = getMaxValue({array: allGasStations, property: type}).toString();
            const lastGasStation = gasStations[gasStations.length - 1];
            const value = extractNumber(lastGasStation[type]);
            return ({
                type,
                filterKey,
                min,
                max,
                value
            })
        })

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