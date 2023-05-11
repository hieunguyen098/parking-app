import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import OfferItem from './components/OfferItem';
import { QueryClient, QueryClientProvider } from 'react-query';
import NewOffer from './components/NewOfferList';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../../../store';

jest.useFakeTimers();
test('test home', () => {
    const queryClient = new QueryClient();
    const component = (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <Home />
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
