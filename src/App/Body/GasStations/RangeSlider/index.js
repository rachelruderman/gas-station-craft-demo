import React from 'react'
import { sentenceCase } from 'change-case';

export const RangeSlider = (props) => {

    const {
        rangeSlider,
        updateFilter,
    } = props;

    const {
        type,
        min,
        max,
        value,
    } = rangeSlider;

    console.log({min, max, value})
    const text = `${sentenceCase(type)}: ${value}`;

    const onChange = (e) => {
        const { value } = e.target;
        console.log({value, type})
        return;
        updateFilter( {[type]: e.target.value} )
    };

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