import React from 'react'

export const RangeSlider = (props) => {

    const {
        rangeSlider,
        updateFilter,
    } = props;

    const {
        type,
        value,
        filterKey,
        min,
        max,
    } = rangeSlider;

    const renderText = () => {
        if (filterKey === 'maxDistance') {
            const noun = (value === 1) ? 'mile' : 'miles';
            return `Max Distance: ${value} ${noun}`;
        }
        if (filterKey === 'maxPrice') {
            return `Max Price: $${Number(value).toFixed(2)}`;
        }
    }

    const factorOf = 100;

    const onChange = (e) => {
        const newValue = (e.target.value / factorOf).toString();
        updateFilter( {[filterKey]: newValue} )
    };

    return (
        <>
            {renderText()}
            <div className={`slidecontainer ${type}`}>
                <input
                    onChange={onChange}
                    type="range"
                    min={min * factorOf}
                    max={max * factorOf}
                    value={value * factorOf}
                    className="slider"
                />
            </div>
        </>

    )
}