import React, { useState } from 'react'

export const RangeSlider = (props) => {
    
    const {
        min,
        max,
        initialValue
    } = props;

    const [value, setValue] = useState(initialValue);

    return (
        <div className="slidecontainer">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                className="slider"
            />
        </div>
    )
}