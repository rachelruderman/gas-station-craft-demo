import React from 'react'
import { sentenceCase } from 'change-case';

export const RangeSlider = (props) => {

    const {
        rangeSlider,
        updateFilter,
        value,
    } = props;

    const {
        type,
        min,
        max,
    } = rangeSlider;

    const text = `${sentenceCase(type)}: ${value}`;

    const onChange = (e) => updateFilter( {[type]: e.target.value} );

    return (
        <>
            {text}
            <div className={`slidecontainer ${type}`}>
                <input
                    onChange={onChange}
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    className="slider"
                />
            </div>
        </>

    )
}