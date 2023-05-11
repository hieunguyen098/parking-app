import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import Login from './Login';
import FingerprintLogin from './FingerprintLogin';

jest.useFakeTimers();
test('test login', () => {
    const queryClient = new QueryClient();
    const component = (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <FingerprintLogin />
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
