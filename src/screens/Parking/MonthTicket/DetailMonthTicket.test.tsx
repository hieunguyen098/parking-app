import * as React from 'react';
import { render } from '@testing-library/react-native';

import DetailMonthTicket from './DetailMonthTicket';

it('renders correctly', () => {
    const tree = render(<DetailMonthTicket />);
    expect(tree).toMatchSnapshot();
});
