import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import ResetPassword from './ResetPassword';

jest.useFakeTimers();
test('test password', () => {
    const queryClient = new QueryClient();
    const component = (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <ResetPassword />
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
