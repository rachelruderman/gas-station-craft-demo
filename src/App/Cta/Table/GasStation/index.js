import React from 'react';

export const GasStation = (props) => {

    const {
        station,
        id,
        address,
        distance,
        city,
        zip,
        country,
        reg_price
    } = props.gasStation;

    const name = (station === 'Unbranded')
        ? `Mystery station`
        : station;

    const renderName = () => {
        const urlEscapedAddress = `${address} ${city} ${zip} ${country}`.replace(/ /g, '+');
        const href = `https://www.google.com/maps/dir/?api=1&destination=${urlEscapedAddress}&travelmode=driving`;

        return (
            <td>
                <a href={href} alt='directions' target='_blank' rel='noopener noreferrer'>
                    {name}
                </a>
            </td>
        )
    }

    const renderPrice = () => {
        return <td>${reg_price}</td>
    }

    const renderDistance = () => {
        const miles = (distance === '1 miles')
            ? '1 mile'
            : distance;

        return <td>{miles}</td>;
    }

    const renderLogo = () => {
        const onError = (e) => { e.target.style.display = 'none' };
        return (
            <td className='logo'>
                <img src={`//logo.clearbit.com/${name}.com`} alt='logo' onError={onError}/>
            </td>
        )
    }

    return (
        <tr key={id}>
            {renderLogo()}
            {renderDistance()}
            {renderName()}
            {renderPrice()}
        </tr>
    )
}