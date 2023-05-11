import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import SignUp from './SignUp';

jest.useFakeTimers();
test('test sign up', () => {
    const queryClient = new QueryClient();
    const component = (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <NavigationContainer>
                    <SignUp />
                </NavigationContainer>
            </Provider>
        </QueryClientProvider>
    );

    const tree = render(component);
    expect(tree).toMatchSnapshot();
});
