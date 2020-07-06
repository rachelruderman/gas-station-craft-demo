import React from 'react';

export const GasStation = (props) => {

    const {
        gasStation,
        className,
        fuelTypeProperty,
    } = props;

    const {
        station,
        id,
        address,
        distance,
        city,
        zip,
        country,
    } = gasStation;

    const name = (station === 'Unbranded')
        ? `Mystery station`
        : station;

    const renderName = () => {
        const urlEscapedAddress = `${address} ${city} ${zip} ${country}`.replace(/ /g, '+');
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${urlEscapedAddress}&travelmode=driving`;

        return (
            <td>
                <a href={googleMapsUrl} alt='directions' target='_blank' rel='noopener noreferrer'>
                    {name}
                </a>
            </td>
        )
    }

    const renderPrice = () => {
        const price = gasStation[fuelTypeProperty];
        return <td className='price'>${price}</td>
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
        <tr key={id} className={className}>
            {renderLogo()}
            {renderDistance()}
            {renderName()}
            {renderPrice()}
        </tr>
    )
}