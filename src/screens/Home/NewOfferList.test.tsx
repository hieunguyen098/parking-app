import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import OfferItem from './components/OfferItem';
import { QueryClient, QueryClientProvider } from 'react-query';
import NewOffer from './components/NewOfferList';

jest.useFakeTimers();
test('test offer list', () => {
    const queryClient = new QueryClient();
    const component = (
        <QueryClientProvider client={queryClient}>
            <NavigationContainer>
                <NewOffer />
            </NavigationContainer>
        </QueryClientProvider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
