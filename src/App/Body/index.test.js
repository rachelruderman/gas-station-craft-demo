import React from 'react';
import { render } from '@testing-library/react';
import { Body } from './index';
import { INITIAL } from './_util/enums';
import { buttonStates } from './_util/buttonStates';

it('it should always show initial CTA text on load', () => {
    const { getByTestId } = render(<Body />);
    const element = getByTestId('cta-button');
    const { text } = buttonStates.find( ({state}) => (state === INITIAL));
    expect(element).toHaveTextContent(text);
});
